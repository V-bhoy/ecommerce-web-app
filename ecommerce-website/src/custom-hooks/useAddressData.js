import {useState} from "react";
import {useDispatch} from "react-redux";
import {getCustomerAddress, updateCustomerAddress} from "../redux/features/auth/authThunk.js";
import {notifyErrorToast, notifySuccessToast} from "../components/toasts/toasts.js";

export default function useAddressData(){
    const dispatch = useDispatch();
    const [current, setCurrent] = useState(null)
    const [address, setAddress] = useState(current);
    const [edit, setEdit] = useState(false);
    const [error, setError] = useState("");
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

    return {
        address,
        fetchAddress,
        updateAddress,
        handleChange,
        handleSubmit,
        resetValues,
        disableInput,
        edit,
        setEdit,
        error,
        setError
    }

}