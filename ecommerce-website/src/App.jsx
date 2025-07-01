import './styles/index.css'
import {RouterProvider, useNavigate} from "react-router-dom";
import {router} from "./routes/router.jsx";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {refreshToken} from "./redux/features/auth/authThunk.js";
import {getAllCategoriesAndSubCategories} from "./redux/features/products/productThunk.js";
import AppSkeleton from "./components/loading-skeleton/AppSkeleton.jsx";
import {globalLogout} from "./redux/features/auth/globalLogout.js";
import {notifyErrorToast} from "./components/toasts/toasts.js";

function App() {
    const dispatch = useDispatch();
    const [load, setLoad] = useState(true);

    const handleRefreshToken = async () => {
        const userLoggedIn = localStorage.getItem("isLoggedIn");
        if (userLoggedIn) {
            const response = await dispatch(refreshToken()).finally(() => setLoad(false));
            if(refreshToken.rejected.match(response)){
                globalLogout(dispatch);
                notifyErrorToast("Session expired! Please login again!");
            }
        } else {
            setLoad(false);
        }
    }

    useEffect(() => {
        handleRefreshToken();
        dispatch(getAllCategoriesAndSubCategories());
    }, [])

    if (load) {
        return <AppSkeleton/>
    }
    return <RouterProvider router={router}/>
}

export default App;
