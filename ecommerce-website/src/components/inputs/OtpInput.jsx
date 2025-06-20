import {useEffect, useRef, useState} from "react";

export default function OtpInput({length = 6, handleOtp, disabled}){
    const [otp, setOtp] = useState(Array(length).fill(""));
    const inputRefs = useRef([]);

    useEffect(() => {
       handleOtp(otp.join(""));
    }, [otp]);

    const handleChange = (value, index) => {
        if (!/^\d?$/.test(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    }

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

   return <div className={"flex items-center gap-3 justify-center"}>
       {
           otp.map((digit, index)=>(
               <input
                   key={index}
                   ref={(el)=>inputRefs.current[index] = el}
                   inputMode={"numeric"}
                   maxLength={1}
                   value={digit}
                   onChange={(e) => handleChange(e.target.value, index)}
                   onKeyDown={(e) => handleKeyDown(e, index)}
                   className="w-10 h-10 text-center border border-gray-300 rounded text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                   disabled={disabled}
               />
           ))
       }
   </div>
}