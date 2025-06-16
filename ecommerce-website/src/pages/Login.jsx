import {Button, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {FcGoogle} from "react-icons/fc";
import {IoEye} from "react-icons/io5";
import {useState} from "react";
import PasswordInput from "../components/inputs/PasswordInput.jsx";

export default function Login(){
    const navigate = useNavigate();

    return <section className={"pages p-10"}>
        <div className={"container flex items-center justify-center"}>
           <div className={"bg-white shadow-md p-5 border border-gray-200 rounded-md w-[40%]"}>
              <h3 className={"text-center text-primary font-[300] text-[1.5rem]"}>Login to your account</h3>
               <div className={"flex flex-col gap-3 !my-5"}>
                   <div className={"flex gap-2 items-center border-1 border-gray-300 rounded-sm text-[13px] py-[7px] px-3"}>
                       <input className={"w-full focus:outline-none"} type={"email"} placeholder={"Email Address"}/>
                   </div>
                   <PasswordInput/>
                   <p onClick={()=>navigate("/login/forgot-password")} className={"text-[12px] px-2 text-blue-700 hover:underline cursor-pointer"}>Forgot Password?</p>
                   <Button variant={"contained"} className={"!bg-primary !text-white"} size={"small"}>Login</Button>
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