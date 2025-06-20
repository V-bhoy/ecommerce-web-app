import {useState} from "react";
import {IoEye, IoEyeOff} from "react-icons/io5";
import {passwordRules} from "../../utils/validate-password.js";

export default function PasswordInput({value, handleChange, name, placeholder, error, isLogin=false}){
    const [showPassword, setShowPassword] = useState(false);
    const firstUnmetRule = passwordRules.find((rule) => !rule.test(value));
    const isOtherPasswordInput = placeholder === "Confirm Password" || isLogin;

    return  <><div className={`flex gap-2 items-center border-1 ${error ? "border-red-500" : "border-gray-300"} rounded-sm text-[13px] py-[7px] px-3`}>
        <input type={showPassword ? "text" : "password"}
               className={"w-full focus:outline-none"}
               size={"small"}
               name={name}
               value={value}
               onChange={handleChange}
               placeholder={placeholder || "Password"}
        />
        {showPassword ? <IoEye onClick={()=>setShowPassword(!showPassword)} className={"cursor-pointer transition"}/> :
            <IoEyeOff onClick={()=>setShowPassword(!showPassword)} className={"cursor-pointer transition"}/>}
    </div>
        {error && <p className={"!mt-[-5px] px-[5px] text-xs text-red-600"}>{error}</p>}
        {!isOtherPasswordInput && value && firstUnmetRule && (
            <p className="!mt-[-5px] px-[5px] text-xs text-red-600">{firstUnmetRule.label}</p>
        )}
        {!isOtherPasswordInput && value && !firstUnmetRule && (
            <p className="!mt-[-5px] px-[5px] text-xs text-green-600">✅ Password looks good!</p>
        )}
        </>
}