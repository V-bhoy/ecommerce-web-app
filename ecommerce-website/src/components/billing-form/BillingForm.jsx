import ErrorDialog from "../error-messages/ErrorDialog.jsx";
import {Button, TextField} from "@mui/material";
import {useState} from "react";
import {validateEmail} from "../../utils/validate-email.js";
import {useDispatch} from "react-redux";
import {getCustomerAddress} from "../../redux/features/auth/authThunk.js";
import {notifyErrorToast} from "../toasts/toasts.js";

export default function BillingForm({onEdit, onSubmit}){
    const dispatch = useDispatch();
    const [data, setData] = useState({
        name: "",
        email: "",
        street: "",
        landmark: "",
        city:"",
        state:"",
        pincode: "",
        contact:""
    });
    const [error, setError] = useState(null);
    const [edit, setEdit] = useState(true);

    const handleEdit = ()=>{
        setEdit(true);
        onEdit();
    }

    const handleData = (e)=>{
        e.preventDefault();
        const {name, email, street, landmark, city, state, pincode, contact} = data;
        if(!name || !email || !street || !landmark || !city || !state || !pincode || !contact){
            setError("All fields are required!");
            return;
        }
        if(!validateEmail(email)){
            setError("Email is not valid!");
            return;
        }
        if(contact.length !== 10){
            setError("Contact number is not valid!");
        }
        if(error){
            return;
        }
        setEdit(false);
        onSubmit(data);
    }

    const handleChange = (e)=>{
        if(error) setError(null);
        const {name, value} = e.target;
        setData(prev=>({...prev, [name]: value}));
    }

    const handleRegisteredAddress = async()=>{
        const response = await dispatch(getCustomerAddress());
        if(getCustomerAddress.fulfilled.match(response)){
            const {address: data}  = response.payload;
            if(!data?.street && !data?.area){
                setError("Please register address in your profile!");
                return;
            }
            setData(prev=>({...prev,
                street: data?.street,
                landmark: data?.area,
                city: data?.city,
                state: data?.state,
                pincode: data?.pincode,
            }))
        }
        if(getCustomerAddress.rejected.match(response)){
            notifyErrorToast(response.error?.message || "Failed to fetch customer address!");
        }
    }

    const disableInput = !edit;

    return <div className={"bg-white h-[50vh] w-[70%] p-3 px-5 shadow-md rounded-sm"}>
        <div className={"flex items-center justify-between px-2 !my-1"}>
            <h1 className={"text-primary font-[500]"}>Billing Details <span className={"text-xs text-blue-600 !mx-2"}>(Submit billing details to proceed with checkout!)</span></h1>
            <p onClick={handleRegisteredAddress} className={"text-xs font-[500] text-blue-600 !mx-2 hover:underline cursor-pointer"}>Add Registered Address</p>
        </div>

        <ErrorDialog error={error} clearError={()=>setError(null)}/>
        <div className={"w-full py-3 flex flex-col gap-3"}>
            <div className={"flex items-center gap-2"}>
                <TextField value={data?.name} name={"name"} onChange={handleChange} disabled={disableInput} placeholder={"Full Name"} className={"flex-1"} size={"small"}/>
                <TextField value={data?.email} name={"email"} onChange={handleChange} disabled={disableInput} placeholder={"Email"} type={"email"} className={"flex-1"} size={"small"}/>
            </div>
            <p className={"text-[13px] font-[500] px-2"}>Street Address *</p>
            <TextField value={data?.street} name={"street"} onChange={handleChange} disabled={disableInput}  placeholder={"Street Name, Apartment No"} size={"small"}/>
            <TextField value={data?.landmark} name={"landmark"} onChange={handleChange} disabled={disableInput}  placeholder={"Area"} size={"small"}/>
            <div className={"flex items-center gap-2"}>
                <TextField value={data?.city} name={"city"} onChange={handleChange} disabled={disableInput}  placeholder={"City"} className={"flex-1"} size={"small"}/>
                <TextField value={data?.state} name={"state"} onChange={handleChange} disabled={disableInput}  placeholder={"State"} className={"flex-1"} size={"small"}/>
            </div>
            <div className={"flex gap-2"}>
                <div className={"flex-1"}>
                    <p className={"text-[13px] font-[500] px-2 !mb-1"}>ZIP / Pincode *</p>
                    <TextField value={data?.pincode} name={"pincode"} onChange={handleChange} disabled={disableInput}  className={"w-full"} placeholder={"Pincode"} size={"small"}/>
                </div>
                <div className={"flex-1"}>
                    <p className={"text-[13px] font-[500] px-2 !mb-1"}>Contact *</p>
                    <TextField value={data?.contact} name={"contact"} onChange={handleChange} disabled={disableInput} className={"w-full"} placeholder={"Contact Number"} size={"small"}/>
                </div>
            </div>
            <div className={"flex justify-end items-center gap-3 !my-2"}>
                {!edit && <Button className={"!bg-secondary !capitalize"} variant={"contained"} size={"small"} onClick={handleEdit}>Edit</Button>}
                <Button className={"!bg-primary !capitalize"} variant={"contained"} size={"small"} onClick={handleData}>Submit</Button>
            </div>
        </div>
    </div>
}