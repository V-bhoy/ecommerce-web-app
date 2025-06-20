import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import PasswordInput from "../components/inputs/PasswordInput.jsx";
import {useState} from "react";
import OtpInput from "../components/inputs/OtpInput.jsx";
import StyledInput from "../components/inputs/StyledInput.jsx";
import {validateEmail} from "../utils/validate-email.js";
import {useDispatch, useSelector} from "react-redux";
import ErrorDialog from "../components/error-messages/ErrorDialog.jsx";
import {requestOtp, resetPasswordByVerifyOtp} from "../redux/features/auth/authThunk.js";
import {clearAuthError} from "../redux/features/auth/authSlice.js";
import {validatePassword} from "../utils/validate-password.js";
import {notifySuccessToast} from "../components/toasts/toasts.js";

export default function ForgotPassword() {
    const [otpSent, setOtpSent ] = useState(false);
    const [otpResend, setOtpResend] = useState(false);
    const [otp, setOtp] = useState("");
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: "",
        otpError: ""
    })
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {error, isLoading} = useSelector(state => state.auth);

    const handleEmailErrors = ()=>{
        if (!userData?.email) {
            setErrors(prev => ({
                ...prev,
                emailError: "Email cannot be empty!"
            }))
            return true;
        }
        if (!validateEmail(userData?.email)) {
            setErrors(prev => ({
                ...prev,
                emailError: "Enter valid email!"
            }))
            return true;
        }
        return false;
    }

    const resetErrors = ()=>{
        setErrors({
            emailError: "",
            passwordError: "",
            otpError: ""
        })
    }

    const handleChange = (e)=>{
        if(!errors?.emailError || !errors?.passwordError || !errors?.otpError){
            resetErrors();
        }
        const {name, value} = e.target;
        setUserData(prev=>({...prev, [name]: value}));
    }

    const handleOtp = (value)=>{
        if(errors?.otpError){
            resetErrors();
        }
        setOtp(value);
    }

    const handleRequestOtp = async() => {
        if(handleEmailErrors()){
            return;
        }
        if(otpSent){
            setOtpResend(true);
        }
        const result = await dispatch(requestOtp({email: userData?.email}));
        if(requestOtp.fulfilled.match(result)){
            notifySuccessToast(result.payload?.message);
            setOtpSent(true);
        }
        setOtpResend(false);
    }

    const handleResetPasswordByVerifyOtp= async() => {
        const emailErrors = handleEmailErrors();
        let hasError = false;
        if(!otp || otp.length<6){
            hasError = true;
            setErrors(prev => ({
                ...prev,
                otpError: "Enter complete otp!"
            }))
        }
        if(!validatePassword(userData?.password)){
            hasError = true;
            setErrors(prev => ({
                ...prev,
                passwordError: "Password does not meet the criteria!"
            }))
        }
        if(hasError || emailErrors || userData?.password !== confirmPassword) return;
        const result = await dispatch(resetPasswordByVerifyOtp({
            ...userData,
            otp
        }));
        if(resetPasswordByVerifyOtp.fulfilled.match(result)){
            notifySuccessToast(result.payload?.message);
            navigate("/login");
        }
    }


    return <section className={"pages p-10"}>
        <div className={"container flex items-center justify-center"}>
            <div className={"relative bg-white shadow-md p-5 border border-gray-200 rounded-md w-[40%]"}>
                {otpSent && <p className={"absolute top-3 right-5 text-xs font-[500]"}>* Do not refresh the page or go back!</p>}
                <div className={"flex flex-col gap-3 !my-5"}>
                    <ErrorDialog error={error} clearError={() => dispatch(clearAuthError())}/>
                    <StyledInput type={"email"}
                                 name={"email"}
                                 placeholder={"Email Address"}
                                 value={userData?.email}
                                 onChange={handleChange}
                                 error={errors?.emailError}
                                 disabled={otpSent}
                    />
                    {!otpSent && <Button onClick={handleRequestOtp}
                                           variant={"contained"}
                                           className={`!bg-primary !text-white ${isLoading ? "!capitalize !bg-secondary" : ""}`}
                                           size={"small"}>
                        {isLoading ? "Sending OTP..." : "Send OTP"}
                    </Button>}
                    {
                        otpSent &&
                        <>
                        <PasswordInput name={"password"} value={userData?.password} handleChange={handleChange} error={errors?.passwordError}/>
                        <PasswordInput value={confirmPassword}
                                       handleChange={(e)=>setConfirmPassword(e.target.value)}
                                       placeholder={"Confirm Password"}
                                       error={confirmPassword && userData?.password !== confirmPassword ? "Password does not match!" : ""}
                        />
                            <p className={"text-[13px] px-3 font-[500]"}>Verify Otp: </p>
                            <div className={"flex justify-between items-end px-3"}>
                                <OtpInput handleOtp={handleOtp}/>
                                <p onClick={handleRequestOtp} className={"text-[13px] text-end text-blue-600 cursor-pointer hover:underline"}>Resend otp</p>
                            </div>
                            {errors?.otpError && <p className="text-red-500 text-xs font-[500] px-3">{errors?.otpError}</p>}
                        <Button onClick={handleResetPasswordByVerifyOtp}
                                variant={"contained"}
                                className={`!bg-primary !text-white ${isLoading ? "!capitalize !bg-secondary" : ""}`}
                                size={"small"}>
                            {isLoading ? otpResend ? "Sending otp..." : "Updating Password..." : "Reset Password"}
                        </Button>
                    </>}
                </div>
                {!otpSent && <p className={"text-center"}>
                    <span onClick={() => navigate("/login")}
                          className={"text-[12px] text-blue-700 hover:underline cursor-pointer"}>
                      Back to login page.
                   </span>
                </p>}
            </div>
        </div>
    </section>
}