import {Button, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";
import PasswordInput from "../components/inputs/PasswordInput.jsx";

export default function ForgotPassword(){
    const navigate = useNavigate();
    return <section className={"pages p-10"}>
        <div className={"container flex items-center justify-center"}>
            <div className={"bg-white shadow-md p-5 border border-gray-200 rounded-md w-[40%]"}>
                <div className={"flex flex-col gap-3 !my-5"}>
                    <div className={"flex gap-2 items-center border-1 border-gray-300 rounded-sm text-[13px] py-[7px] px-3"}>
                        <input className={"w-full focus:outline-none"} type={"email"} placeholder={"Email Address"}/>
                    </div>
                    <PasswordInput/>
                    <PasswordInput placeholder={"Confirm Password"}/>
                    <Button variant={"contained"} className={"!bg-primary !text-white"} size={"small"}>Create Password</Button>
                </div>
                <p className={"text-center"}>
                    <span onClick={()=>navigate("/login")} className={"text-[12px] text-blue-700 hover:underline cursor-pointer"}>
                     Back to login page.
                   </span>
                </p>
            </div>
        </div>
    </section>
}