import {useNavigate} from "react-router-dom";
import PasswordInput from "../components/inputs/PasswordInput.jsx";
import {Button} from "@mui/material";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {validatePassword} from "../utils/validate-password.js";
import {resetPassword} from "../redux/features/auth/authThunk.js";
import {notifyErrorToast, notifySuccessToast} from "../components/toasts/toasts.js";
import ErrorDialog from "../components/error-messages/ErrorDialog.jsx";

export default function CreateNewPassword(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handlePassword = async()=>{
        if(!password){
            setError("Enter valid password to continue!");
            return;
        }
        if(!validatePassword(password)){
            setError("Password does not meet the criteria!");
            return;
        }
        if(password !== confirmPassword){
            setError("Password does not match!");
            return;
        }
        const response = await dispatch(resetPassword(password));
        if(resetPassword.fulfilled.match(response)){
            notifySuccessToast("Updated password successfully!");
            navigate(-1);
        }
        if(resetPassword.rejected.match(response)){
            notifyErrorToast(response?.error?.message || "Failed to reset password!");
            setPassword("");
            setConfirmPassword("");
        }
    }

    const handleChange=(e)=>{
        if(error) setError("");
        const {name, value} = e.target;
        if(name === "password"){
            setPassword(value);
        }else{
            setConfirmPassword(value);
        }
    }


    return <section className={"pages p-10"}>
        <div className={"container flex items-center justify-center"}>
            <div className={"bg-white shadow-md p-5 border border-gray-200 rounded-md md:max-lg:w-[60%] w-[40%]"}>
                <div className={"flex flex-col gap-3 !my-5"}>
                    {error && <ErrorDialog error={error} clearError={()=>setError("")}/>}
                    <PasswordInput name={"password"} value={password} handleChange={handleChange} placeholder={"New Password"}/>
                    <PasswordInput name={"confirmPassword"} value={confirmPassword} handleChange={handleChange} placeholder={"Confirm Password"}/>
                    <Button onClick={handlePassword} variant={"contained"} className={"!bg-primary !text-white"} size={"small"}>Create Password</Button>
                </div>
                <p className={"text-center"}>
                    <span onClick={()=>navigate(-1)} className={"text-[12px] text-blue-700 hover:underline cursor-pointer"}>
                     Back to my account page.
                   </span>
                </p>
            </div>
        </div>
    </section>
}