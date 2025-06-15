import {Button, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";

export default function ForgotPassword(){
    const navigate = useNavigate();
    return <section className={"pages p-10"}>
        <div className={"container flex items-center justify-center"}>
            <div className={"bg-white shadow-md p-5 border border-gray-200 rounded-md w-[40%]"}>
                <div className={"flex flex-col gap-3 !my-5"}>
                    <TextField type={"email"} className={"w-full"} size={"small"} placeholder={"Email Address"}/>
                    <TextField type={"password"} className={"w-full"} size={"small"} placeholder={"Create New Password"}/>
                    <TextField type={"password"} className={"w-full"} size={"small"} placeholder={"Confirm Password"}/>
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