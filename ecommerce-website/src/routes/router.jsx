import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout.jsx";
import Home from "../pages/Home.jsx";
import PageNotFound from "../pages/PageNotFound.jsx";
import Products from "../pages/Products.jsx";
import ProductDetails from "../pages/ProductDetails.jsx";
import Register from "../pages/Register.jsx";
import Login from "../pages/Login.jsx";
import ForgotPassword from "../pages/ForgotPassword.jsx";
import Cart from "../pages/Cart.jsx";
import Checkout from "../pages/Checkout.jsx";
import MyAccount from "../pages/MyAccount.jsx";
import Orders from "../pages/Orders.jsx";
import Wishlist from "../pages/Wishlist.jsx";
import CreateNewPassword from "../pages/CreateNewPassword.jsx";
import PublicRoute from "../pages/PublicRoute.jsx";
import PrivateRoute from "../pages/PrivateRoute.jsx";
import CheckoutSuccess from "../pages/CheckoutSuccess.jsx";

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
                path: "register",
                element: <PublicRoute><Register/></PublicRoute>
            },
            {
                path: "login",
                element: <PublicRoute><Login/></PublicRoute>
            },
            {
                path: "login/forgot-password",
                element: <PublicRoute><ForgotPassword/></PublicRoute>
            },
            {
                path: "/user/:id",
                element: <PrivateRoute><MyAccount/></PrivateRoute>
            },
            {
                path: "/user/create-new-password",
                element: <PrivateRoute><CreateNewPassword/></PrivateRoute>
            },
            {
                path: "/orders",
                element: <PrivateRoute><Orders/></PrivateRoute>
            },
            {
                path: "/wishlist",
                element: <PrivateRoute><Wishlist/></PrivateRoute>
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
                path: "products/details/:id",
                Component: ProductDetails
            },
            {
                path: "/cart",
                // element: <PrivateRoute><Cart/></PrivateRoute>
                element: <Cart/>
            },
            {
                path: "/checkout",
                element: <PrivateRoute><Checkout/></PrivateRoute>
            },
            {
                path:"/checkout/success",
                element: <CheckoutSuccess/>
            }
        ]
    },
    {
      path: "*", Component: PageNotFound
    }
])
