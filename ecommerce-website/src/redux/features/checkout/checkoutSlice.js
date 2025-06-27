import {createSlice} from "@reduxjs/toolkit";
import {createPayment} from "./checkoutThunk.js";

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
        builder.addCase(createPayment.pending, ()=>{});
        builder.addCase(createPayment.fulfilled,(state, action)=>{
            //console.log(action);
            window.location.href=action.payload.url;
        });
        builder.addCase(createPayment.rejected, (state, action)=>{
            console.log(action.error);
        });
    }
})

export default checkoutSlice.reducer;