import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice.js";

const persistConfig = {
    key: "root",

}

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    devTools: true
});

export default store;