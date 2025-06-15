import {Button, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {FcGoogle} from "react-icons/fc";

export default function Register(){
    const navigate = useNavigate();
    return <section className={"pages p-10"}>
        <div className={"container flex items-center justify-center"}>
            <div className={"bg-white shadow-md p-5 border border-gray-200 rounded-md w-[40%]"}>
                <h3 className={"text-center text-primary font-[300] text-[1.5rem]"}>Create your account</h3>
                <div className={"flex flex-col gap-3 !my-5"}>
                    <TextField type={"text"} className={"w-full"} size={"small"} placeholder={"Full Name"}/>
                    <TextField type={"email"} className={"w-full"} size={"small"} placeholder={"Email Address"}/>
                    <TextField type={"password"} className={"w-full"} size={"small"} placeholder={"Password"}/>
                    <TextField type={"password"} className={"w-full"} size={"small"} placeholder={"Confirm Password"}/>
                    <Button variant={"contained"} className={"!bg-primary !text-white"} size={"small"}>Register</Button>
                </div>
                <p className={"text-center"}>
                    <span className={"text-[13px] px-2"}>Already registered?</span>
                    <span onClick={()=>navigate("/login")} className={"text-[12px] text-blue-700 hover:underline cursor-pointer"}>
                     Click here to login.
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