import {Button, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getCustomerAddress, updateCustomerAddress} from "../redux/features/auth/authThunk.js";
import {notifyErrorToast, notifySuccessToast} from "../components/toasts/toasts.js";
import ErrorDialog from "../components/error-messages/ErrorDialog.jsx";

export default function MyAccount(){
    const [current, setCurrent] = useState(null)
    const [address, setAddress] = useState(current);
    const [edit, setEdit] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector(state=>state.auth);
    const disableInput = !edit;

    const fetchAddress = async()=>{
        const response = await dispatch(getCustomerAddress());
        if(getCustomerAddress.fulfilled.match(response)){
            const {address: data}  = response.payload;
            const currentAddress = {
                street: data?.street || "",
                area: data?.area || "",
                city: data?.city || "",
                state: data?.state || "",
                pincode: data?.pincode || ""
            };
            setCurrent(currentAddress);
            setAddress(currentAddress);
        }
    }

    const updateAddress = async()=>{
        const response = await dispatch(updateCustomerAddress(address));
        if(updateCustomerAddress.fulfilled.match(response)){
            notifySuccessToast("Updated Address successfully!");
            setEdit(false);
            setCurrent(address);
        }
        if(updateCustomerAddress.rejected.match(response)){
            notifyErrorToast(response?.error?.message || "Failed to update address!");
            resetValues();
        }
    }

    useEffect(() => {
        fetchAddress();
    }, []);

    const handleChange = (e)=>{
        if(error) setError("");
        const {name, value} = e.target;
        setAddress({...address, [name]: value});
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const {street, area, city, state, pincode} = address;
        if(!street || !area || !city || !state || !pincode){
            setError("All fields are required!");
            return;
        }
        updateAddress();
    }

    const resetValues = ()=>{
        setEdit(false);
        setAddress(current);
    }


    return <section className={"pages py-10"}>
        <div className={"container flex justify-center"}>
            <div className={"bg-white w-[70%] p-3 px-5 shadow-md rounded-sm"}>
                <h1 className={"text-primary px-2 font-[500]"}>User Information</h1>
                <form className={"w-full py-3 flex flex-col gap-3"}>
                    {error && <ErrorDialog error={error} clearError={()=>setError("")}/>}
                    <div className={"flex items-center gap-2"}>
                        <TextField defaultValue={user?.firstName} disabled placeholder={"First Name"} className={"flex-1"} size={"small"}/>
                        <TextField defaultValue={user?.lastName} disabled placeholder={"Last Name"} className={"flex-1"} size={"small"}/>
                    </div>
                    <TextField defaultValue={user?.email} disabled placeholder={"Email"} type={"email"} className={"flex-1"} size={"small"}/>
                    <p className={"text-[13px] font-[500] px-2"}>Street Address *</p>
                    <TextField name={"street"} value={address?.street} onChange={handleChange} disabled={disableInput} placeholder={"Street Name, Apartment No"} size={"small"}/>
                    <TextField name={"area"} value={address?.area} onChange={handleChange} disabled={disableInput} placeholder={"Area"} size={"small"}/>
                    <div className={"flex items-center gap-2"}>
                        <TextField name={"city"} value={address?.city} onChange={handleChange} disabled={disableInput} placeholder={"City"} className={"flex-1"} size={"small"}/>
                        <TextField name={"state"} value={address?.state} onChange={handleChange} disabled={disableInput} placeholder={"State"} className={"flex-1"} size={"small"}/>
                    </div>
                    <p className={"text-[13px] font-[500] px-2"}>ZIP / Pincode *</p>
                    <TextField name={"pincode"} value={address?.pincode} onChange={handleChange} disabled={disableInput} placeholder={"Pincode"} className={"flex-1"} size={"small"}/>
                </form>
                <div className={"flex justify-end gap-3"}>
                    <Button onClick={edit ? handleSubmit : ()=>setEdit(true)} size={"small"} variant={"contained"} className={"!bg-primary !capitalize"}>{edit ? "Save Changes" : "Update Address"}</Button>
                    {edit && <Button onClick={resetValues}  size={"small"} className={"!bg-orange-100 !text-red-600 !capitalize hover:!underline"}>Reset</Button>}
                    <Button onClick={()=>navigate("/profile/create-new-password")} size={"small"} variant={"contained"} className={"!bg-primary !capitalize"}>Change Password</Button>
                </div>
            </div>
        </div>
    </section>
}