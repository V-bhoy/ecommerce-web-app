import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {FcGoogle} from "react-icons/fc";
import PasswordInput from "../components/inputs/PasswordInput.jsx";
import StyledInput from "../components/inputs/StyledInput.jsx";
import {useDispatch} from "react-redux";
import ErrorDialog from "../components/error-messages/ErrorDialog.jsx";
import {clearAuthError} from "../redux/features/auth/authSlice.js";
import useRegisterData from "../custom-hooks/useRegisterData.js";

export default function Register(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {isLoading, authError, userData, handleChange, errors, handleSubmit, confirmPassword, handleConfirmPassword} = useRegisterData();


    return <section className={"pages p-10"}>
        <div className={"container flex items-center justify-center"}>
            <div className={"bg-white shadow-md p-5 border border-gray-200 rounded-md md:max-lg:w-[60%] w-[40%]"}>
                <h3 className={"text-center text-primary font-[300] text-[1.5rem]"}>Create your account</h3>
                <div className={"flex flex-col gap-3 !my-5"}>
                    <ErrorDialog error={authError} clearError={()=>dispatch(clearAuthError())}/>
                    <StyledInput name={"firstName"} value={userData?.firstName} onChange={handleChange} placeholder={"First Name"} error={errors?.firstNameError}/>
                    <StyledInput name={"lastName"} value={userData?.lastName} onChange={handleChange} placeholder={"Last Name"} error={errors?.lastNameError}/>
                    <StyledInput name={"email"} type={"email"} value={userData?.email} onChange={handleChange} placeholder={"Email Address"} error={errors?.emailError}/>
                    <PasswordInput name={"password"} value={userData?.password} handleChange={handleChange} error={errors?.passwordError}/>
                    <PasswordInput name={"confirmPassword"}
                                   value={confirmPassword}
                                   handleChange={handleConfirmPassword}
                                   placeholder={"Confirm Password"}
                                   error={confirmPassword && userData?.password !== confirmPassword ? "Password does not match!" : ""}/>
                    <Button variant={"contained"}
                            className={`!bg-primary !text-white ${isLoading ? "!capitalize !bg-secondary" : ""}`}
                            size={"small"}
                            onClick={handleSubmit}
                            disabled={isLoading}
                    >
                        {isLoading ? "Signing up..." : "Register"}
                    </Button>
                </div>
                <p className={"text-center"}>
                    <span className={"text-[13px] px-2"}>Already registered?</span>
                    <span onClick={()=>navigate("/login")} className={"text-[12px] text-blue-700 hover:underline cursor-pointer"}>
                     Click here to login.
                   </span>
                </p>

                <p className={"text-[14px] text-center text-gray-800 !my-2 font-[500]"}>Or continue with google account</p>
                <div className={"flex justify-center"}>
                    <Button size={"small"} className={"!capitalize gap-2 !px-3 hover:!bg-orange-100 hover:!text-primary transition"}>
                        <FcGoogle/>Sign In With Google
                    </Button>
                </div>
            </div>
        </div>
    </section>
}