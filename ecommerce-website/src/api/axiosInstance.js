import axios from "axios";
import {setAccessToken} from "../redux/features/auth/authSlice.js";
import {logoutUser} from "../redux/features/auth/authThunk.js";

const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8080/api";


export default function createAxiosInstance({store}){
    const axiosInstance = axios.create({
        baseURL: BASE_URL,
        withCredentials: true,
    })

    axiosInstance.interceptors.request.use((config)=>{
        const accessToken = store.getState().auth.accessToken;
        if(accessToken){
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    }, (err)=>Promise.reject(err));

    axiosInstance.interceptors.response.use((res)=>res, async(err)=>{
        console.log("Axios Error Response: ",err.config, err.response);
        const originalRequest = err.config;
        const isAuthEndpoint =
            originalRequest.url.includes("/auth/login") ||
            originalRequest.url.includes("/auth/refresh");
        console.log("REQUEST URL: ", originalRequest.url);
        if(err.response?.status === 401 && !originalRequest._retry && !isAuthEndpoint){
            originalRequest._retry = true;
            try{
                const res = await axios.get(`${BASE_URL}/auth/refresh`, {
                    withCredentials: true
                });
                store.dispatch(setAccessToken(res.data.accessToken));
                originalRequest.headers.Authorization = `Bearer ${res.data.accessToken}`;
                return axiosInstance(originalRequest);
            }catch(err){
                return Promise.reject({
                    message: (err?.response?.data?.message || "Refresh token request failed!"),
                    code:`${err?.response?.status} - `+err?.response?.statusText,
                    status: err?.status,
                    name: err?.name
                });
            }
        }
        return Promise.reject({
            message: (err?.response?.data?.message || "Request failed"),
            code:`${err?.response?.status} - `+err?.response?.statusText,
            status: err?.status,
            name: err?.name
        });
    })

    return axiosInstance;

}


