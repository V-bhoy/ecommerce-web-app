import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosInstance} from "../../../main.jsx";

export const createOrder = createAsyncThunk("createOrder", async(args)=>{
       const response = await axiosInstance.post("/orders/create", args);
       return response.data;
    }
)

export const verifyOrderPayment = createAsyncThunk("verifyOrderPayment",async(paymentData)=>{
    const response = await axiosInstance.post("/orders/payment/verify", paymentData);
    return response.data;
})

export const updateOrderPaymentFailed = createAsyncThunk("updateOrderPaymentFailed",async(orderId)=>{
    const response = await axiosInstance.post("/orders/payment/failed", {orderId});
    return response.data;
})