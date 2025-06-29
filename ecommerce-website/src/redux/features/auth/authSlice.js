import {createSlice} from "@reduxjs/toolkit";
import {
    loginUser,
    logoutUser,
    refreshToken,
    registerUser,
    requestOtp,
    resetPasswordByVerifyOtp,
} from "./authThunk.js";

// initial auth state
const initialState = {
    isLoading: false,
    isLoggedIn: localStorage.getItem("isLoggedIn") || false,
    accessToken: null,
    user: null,
    error: null,
}

// reducer actions
const setAuthSuccess = (state, action) => {
    localStorage.setItem("isLoggedIn", "true");
    state.isLoading = false;
    state.isLoggedIn = true;
    state.accessToken = action.payload.accessToken;
    state.user = action.payload.user;
    state.error = null;
};

const setAuthError = (state, action) => {
    state.isLoading = false;
    state.error = action.payload?.message || action.error?.message || "Something went wrong";
};

const resetAuthState = (state) => {
    localStorage.clear();
    state.isLoading = false;
    state.isLoggedIn = false;
    state.accessToken = null;
    state.user = null;
    state.error = null;
};

const loadAuthState = (state)=>{
    state.isLoading = true;
    state.error = null;
}

// slice
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAccessToken: (state, action)=>{
            state.accessToken = action.payload;
        },
        clearAuthError: (state)=>{
            state.error = null;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(registerUser.pending, loadAuthState);
        builder.addCase(registerUser.fulfilled, setAuthSuccess);
        builder.addCase(registerUser.rejected, setAuthError);
        builder.addCase(loginUser.pending, loadAuthState);
        builder.addCase(loginUser.fulfilled, setAuthSuccess);
        builder.addCase(loginUser.rejected, setAuthError);
        builder.addCase(logoutUser.fulfilled, resetAuthState);
        builder.addCase(logoutUser.rejected, resetAuthState);
        builder.addCase(refreshToken.fulfilled, setAuthSuccess);
        builder.addCase(refreshToken.rejected, setAuthError);
        builder.addCase(requestOtp.pending, loadAuthState);
        builder.addCase(requestOtp.fulfilled, (state)=>{
            state.isLoading = false;
            state.error = null;
        })
        builder.addCase(requestOtp.rejected, setAuthError);
        builder.addCase(resetPasswordByVerifyOtp.pending, loadAuthState);
        builder.addCase(resetPasswordByVerifyOtp.fulfilled, (state)=>{
            state.isLoading = false;
            state.error = null;
        })
        builder.addCase(resetPasswordByVerifyOtp.rejected, setAuthError);
    }
})

export const {setAccessToken, clearAuthError} = authSlice.actions;
export default authSlice.reducer;