import {createSlice} from "@reduxjs/toolkit";
import {createOrder, updateOrderPaymentFailed, verifyOrderPayment} from "./checkoutThunk.js";


const initialState = {
    isLoading: false,
    error: null,
    data: null
}

const checkoutSlice = createSlice({
    name: "checkout",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(createOrder.pending, ()=>{});
        builder.addCase(createOrder.fulfilled,(state, action)=>{
            //console.log(action);
           // window.location.href=action.payload.url;
        });
        builder.addCase(createOrder.rejected, (state, action)=>{
            console.log(action.error);
        });
        builder.addCase(verifyOrderPayment.pending, ()=>{});
        builder.addCase(verifyOrderPayment.fulfilled,(state, action)=>{
            //console.log(action);
            // window.location.href=action.payload.url;
        });
        builder.addCase(verifyOrderPayment.rejected, (state, action)=>{
            console.log(action.error);
        });
        builder.addCase(updateOrderPaymentFailed.pending, ()=>{});
        builder.addCase(updateOrderPaymentFailed.fulfilled,(state, action)=>{
            //console.log(action);
            // window.location.href=action.payload.url;
        });
        builder.addCase(updateOrderPaymentFailed.rejected, (state, action)=>{
            console.log(action.error);
        });
    }
})

export default checkoutSlice.reducer;