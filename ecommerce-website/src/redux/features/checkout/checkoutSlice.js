import {createSlice} from "@reduxjs/toolkit";
import { getAllOrders } from "./checkoutThunk.js";

const initialState = {
    isLoading: false,
    error: null,
    orders: null
}

const checkoutSlice = createSlice({
    name: "checkout",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        // get all orders
        builder.addCase(getAllOrders.pending, (state)=>{
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(getAllOrders.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.orders = action.payload.orders;
        })
        builder.addCase(getAllOrders.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.error?.message || "Request failed!";
        })
    }
})

export default checkoutSlice.reducer;