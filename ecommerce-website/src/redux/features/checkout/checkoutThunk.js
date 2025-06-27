import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosInstance} from "../../../main.jsx";

export const createPayment = createAsyncThunk("createPayment", async(checkoutItems)=>{
       const response = await axiosInstance.post("/checkout/create-checkout-session", {checkoutItems});
       return response.data;
    }
)