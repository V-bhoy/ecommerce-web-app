import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice.js";
import productsReducer from "./features/products/productSlice.js";
import cartReducer from "./features/cart/cartSlice.js";
import checkoutReducer from "./features/checkout/checkoutSlice.js";

const rootReducer = combineReducers({
    auth: authReducer,
    products: productsReducer,
    cart: cartReducer,
    checkout: checkoutReducer
})

const store = configureStore({
    reducer: rootReducer,
    devTools: true
});

export default store;