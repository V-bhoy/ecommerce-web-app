import {logoutUser} from "./authThunk.js";
import {clearCart} from "../cart/cartSlice.js";
import {clearOrders} from "../checkout/checkoutSlice.js";

export const globalLogout = (dispatch) => {
    dispatch(logoutUser());
    dispatch(clearCart());
    dispatch(clearOrders());
};