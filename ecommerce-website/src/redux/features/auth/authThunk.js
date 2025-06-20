import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosInstance} from "../../../main.jsx";

export const registerUser = createAsyncThunk("registerUser",
    async(userData)=>{
        const response = await axiosInstance.post("/auth/register", userData);
        return response.data;
    })

export const loginUser = createAsyncThunk("loginUser", async(userData)=>{
        const response = await axiosInstance.post("/auth/login", userData);
        return response.data;
})

export const logoutUser = createAsyncThunk("logoutUser",async()=>{
        const response = await axiosInstance.post("/auth/logout");
        return response.data;
})

export const refreshToken = createAsyncThunk("refreshToken", async()=>{
    const response = await axiosInstance.get("/auth/refresh");
    return response.data;
})

export const requestOtp = createAsyncThunk("requestOtp", async(userData)=>{
    const response = await axiosInstance.post("/auth/request-otp", userData);
    return response.data;
})

export const resetPasswordByVerifyOtp = createAsyncThunk("resetPassword", async(userData)=>{
    const response = await axiosInstance.post("/auth/reset-password", userData);
    return response.data;
})
