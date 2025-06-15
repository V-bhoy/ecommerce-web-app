import {Button, TextField} from "@mui/material";
import {Link} from "react-router-dom";

export default function Login(){
    return <section className={"pages p-10"}>
        <div className={"container flex items-center justify-center"}>
           <div className={"bg-white shadow-md p-5 border border-gray-200 rounded-md w-[40%]"}>
              <h3 className={"text-center text-primary font-[300] text-[1.5rem]"}>Login to your account</h3>
               <div className={"flex flex-col gap-3 !my-5"}>
                   <TextField type={"email"} className={"w-full"} size={"small"} placeholder={"Email Address"}/>
                   <TextField type={"password"} className={"w-full"} size={"small"} placeholder={"Password"}/>
                   <Link to={"#"}><p className={"text-[12px] px-2 text-blue-700 hover:underline"}>Forgot Password?</p></Link>
                   <Button variant={"contained"} className={"!bg-primary !text-white"} size={"small"}>Login</Button>
               </div>

           </div>
        </div>
    </section>
}