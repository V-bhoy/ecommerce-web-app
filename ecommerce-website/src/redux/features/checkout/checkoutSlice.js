import {createSlice} from "@reduxjs/toolkit";
import {createOrder, getAllOrders, updateOrderPaymentFailed, verifyOrderPayment} from "./checkoutThunk.js";


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
        builder.addCase(getAllOrders.pending, (state)=>{
            state.isLoading = true;
        });
        builder.addCase(getAllOrders.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.orders = action.payload.orders;
        })
    }
})

export default checkoutSlice.reducer;