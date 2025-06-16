import {useState} from "react";
import {IoEye, IoEyeOff} from "react-icons/io5";

export default function PasswordInput({placeholder}){
    const [showPassword, setShowPassword] = useState(false);
    return   <div className={"flex gap-2 items-center border-1 border-gray-300 rounded-sm text-[13px] py-[7px] px-3"}>
        <input type={showPassword ? "text" : "password"} className={"w-full focus:outline-none"} size={"small"} placeholder={placeholder || "Password"}/>
        {showPassword ? <IoEye onClick={()=>setShowPassword(!showPassword)} className={"cursor-pointer transition"}/> :
            <IoEyeOff onClick={()=>setShowPassword(!showPassword)} className={"cursor-pointer transition"}/>}
    </div>
}