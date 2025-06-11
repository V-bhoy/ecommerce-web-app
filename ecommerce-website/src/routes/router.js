import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import Layout from "../Layout.jsx";
import Home from "../pages/Home.jsx";
import PageNotFound from "../pages/PageNotFound.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    },
    {
      path: "*", Component: PageNotFound
    }
])
