import {Button, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";

export default function MyAccount(){
    const navigate = useNavigate();
    return <section className={"pages py-10"}>
        <div className={"container flex justify-center"}>
            <div className={"bg-white w-[70%] p-3 px-5 shadow-md rounded-sm"}>
                <h1 className={"text-primary px-2 font-[500]"}>User Information</h1>
                <form className={"w-full py-3 flex flex-col gap-3"}>
                    <div className={"flex items-center gap-2"}>
                        <TextField placeholder={"First Name"} className={"flex-1"} size={"small"}/>
                        <TextField placeholder={"Last Name"} className={"flex-1"} size={"small"}/>
                    </div>
                    <TextField placeholder={"Email"} type={"email"} className={"flex-1"} size={"small"}/>
                    <p className={"text-[13px] font-[500] px-2"}>Street Address *</p>
                    <TextField placeholder={"Street Name, Apartment No"} size={"small"}/>
                    <TextField placeholder={"Area"} size={"small"}/>
                    <div className={"flex items-center gap-2"}>
                        <TextField placeholder={"City"} className={"flex-1"} size={"small"}/>
                        <TextField placeholder={"State"} className={"flex-1"} size={"small"}/>
                    </div>
                    <p className={"text-[13px] font-[500] px-2"}>ZIP / Pincode *</p>
                    <TextField placeholder={"Pincode"} className={"flex-1"} size={"small"}/>
                </form>
                <div className={"flex justify-end gap-3"}>
                    <Button size={"small"} variant={"contained"} className={"!bg-primary !capitalize"}>Save Changes</Button>
                    <Button onClick={()=>navigate("/user/create-new-password")} size={"small"} variant={"contained"} className={"!bg-primary !capitalize"}>Change Password</Button>
                </div>
            </div>
        </div>
    </section>
}