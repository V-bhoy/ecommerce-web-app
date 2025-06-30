import './index.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/router.jsx";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {refreshToken} from "./redux/features/auth/authThunk.js";
import {getAllCategoriesAndSubCategories} from "./redux/features/products/productThunk.js";
import AppSkeleton from "./components/loading-skeleton/AppSkeleton.jsx";

function App() {
    const dispatch = useDispatch();
    const [load, setLoad] = useState(true);

    const handleRefreshToken = async () => {
        const userLoggedIn = localStorage.getItem("isLoggedIn");
        if (userLoggedIn) {
            await dispatch(refreshToken()).finally(() => setLoad(false));
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
