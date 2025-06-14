import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout.jsx";
import Home from "../pages/Home.jsx";
import PageNotFound from "../pages/PageNotFound.jsx";
import Products from "../pages/Products.jsx";
import ProductDetails from "../pages/ProductDetails.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "products/:category",
                Component: Products
            },
            {
                path: "products/:category/:subCategory",
                Component: Products
            },
            {
                path: "products/:category/:subCategory/:id",
                Component: ProductDetails
            }
        ]
    },
    {
      path: "*", Component: PageNotFound
    }
])
