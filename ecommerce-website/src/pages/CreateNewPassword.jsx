import {useNavigate} from "react-router-dom";
import PasswordInput from "../components/inputs/PasswordInput.jsx";
import {Button} from "@mui/material";

export default function CreateNewPassword(){
    const navigate = useNavigate();
    return <section className={"pages p-10"}>
        <div className={"container flex items-center justify-center"}>
            <div className={"bg-white shadow-md p-5 border border-gray-200 rounded-md w-[40%]"}>
                <div className={"flex flex-col gap-3 !my-5"}>
                    <PasswordInput placeholder={"New Password"}/>
                    <PasswordInput placeholder={"Confirm Password"}/>
                    <Button variant={"contained"} className={"!bg-primary !text-white"} size={"small"}>Create Password</Button>
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