import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {FcGoogle} from "react-icons/fc";
import {useState} from "react";
import PasswordInput from "../components/inputs/PasswordInput.jsx";
import StyledInput from "../components/inputs/StyledInput.jsx";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../redux/features/auth/authThunk.js";
import {validateEmail} from "../utils/validate-email.js";
import ErrorDialog from "../components/error-messages/ErrorDialog.jsx";
import {clearAuthError} from "../redux/features/auth/authSlice.js";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({
        emailError: "",
        passwordError: ""
    });
    const {error: authError, isLoading} = useSelector(state=>state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = ()=>{
        let isError = false;
        if(!email || !password){
            isError = true;
            setError({
                emailError: !email ? "Email required!" : "",
                passwordError: !password ? "Password required!": ""
            })
        }
        if(!validateEmail(email)){
            isError = true;
            setError(prev=>({
                ...prev,
                emailError: "Enter valid email!",
            }))
        }
        if(isError){
            return;
        }
        dispatch(loginUser({
            email: email.trim(),
            password: password.trim()
        }))
    }

    const handleChange=(e)=>{
        if(error.emailError || error.passwordError){
            setError({
                emailError: "",
                passwordError: ""
            })
        }
        const {name, value} = e.target;
        if(name === "email"){
            setEmail(value);
        }
        if(name === "password"){
            setPassword(value)
        }
    }

    return <section className={"pages p-10"}>
        <div className={"container flex items-center justify-center"}>
           <div className={"bg-white shadow-md p-5 border border-gray-200 rounded-md w-[40%]"}>
              <h3 className={"text-center text-primary font-[300] text-[1.5rem]"}>Login to your account</h3>
               <div className={"flex flex-col gap-3 !my-5"}>
                   {<ErrorDialog error={authError} clearError={()=>dispatch(clearAuthError())}/>}
                   <StyledInput name={"email"} value={email} onChange={handleChange} type="email" placeholder={"Email Address"} error={error?.emailError}/>
                   <PasswordInput name={"password"} value={password} handleChange={handleChange} error={error?.passwordError} isLogin/>
                   <p onClick={()=>navigate("/login/forgot-password")} className={"text-[12px] px-2 text-blue-700 hover:underline cursor-pointer"}>Forgot Password?</p>
                   <Button onClick={handleSubmit}
                           variant={"contained"}
                           className={`!bg-primary !text-white ${isLoading ? "!capitalize !bg-secondary": ""}`}
                           size={"small"}
                           disabled={isLoading}
                   >
                       {isLoading ? "Logging In..." : "Login"}
                   </Button>
               </div>
               <p className={"text-center"}>
                   <span className={"text-[13px] px-2"}>Not Registered?</span>
                   <span onClick={()=>navigate("/register")} className={"text-[12px] text-blue-700 hover:underline cursor-pointer"}>
                     Click here to register.
                   </span>
               </p>

               <p className={"text-[14px] text-center text-gray-800 !my-2 font-[500]"}>Or continue with google account</p>
               <div className={"flex justify-center"}>
                   <Button size={"small"} className={"!capitalize gap-2 !px-3 hover:!bg-orange-100 hover:!text-primary transition"}><FcGoogle/>Sign In With Google</Button>
               </div>

           </div>
        </div>
    </section>
}