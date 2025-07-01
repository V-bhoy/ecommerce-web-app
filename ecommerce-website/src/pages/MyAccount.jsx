import {Button, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import ErrorDialog from "../components/error-messages/ErrorDialog.jsx";
import useAddressData from "../custom-hooks/useAddressData.js";

export default function MyAccount() {
    const navigate = useNavigate();
    const {user} = useSelector(state => state.auth);
    const { address, fetchAddress, handleChange, handleSubmit, resetValues, disableInput,
        edit, setEdit, error, setError} = useAddressData();


    useEffect(() => {
        fetchAddress();
    }, []);


    return <section className={"pages py-10"}>
        <div className={"container flex justify-center"}>
            <div className={"bg-white w-[70%] p-3 px-5 shadow-md rounded-sm"}>
                <h1 className={"text-primary px-2 font-[500]"}>User Information</h1>
                <form className={"w-full py-3 flex flex-col gap-3"}>
                    {error && <ErrorDialog error={error} clearError={() => setError("")}/>}
                    <div className={"flex items-center gap-2"}>
                        <TextField defaultValue={user?.firstName} disabled placeholder={"First Name"}
                                   className={"flex-1"} size={"small"}/>
                        <TextField defaultValue={user?.lastName} disabled placeholder={"Last Name"} className={"flex-1"}
                                   size={"small"}/>
                    </div>
                    <TextField defaultValue={user?.email} disabled placeholder={"Email"} type={"email"}
                               className={"flex-1"} size={"small"}/>
                    <p className={"text-[13px] font-[500] px-2"}>Street Address *</p>
                    <TextField name={"street"} value={address?.street} onChange={handleChange} disabled={disableInput}
                               placeholder={"Street Name, Apartment No"} size={"small"}/>
                    <TextField name={"area"} value={address?.area} onChange={handleChange} disabled={disableInput}
                               placeholder={"Area"} size={"small"}/>
                    <div className={"flex items-center gap-2"}>
                        <TextField name={"city"} value={address?.city} onChange={handleChange} disabled={disableInput}
                                   placeholder={"City"} className={"flex-1"} size={"small"}/>
                        <TextField name={"state"} value={address?.state} onChange={handleChange} disabled={disableInput}
                                   placeholder={"State"} className={"flex-1"} size={"small"}/>
                    </div>
                    <p className={"text-[13px] font-[500] px-2"}>ZIP / Pincode *</p>
                    <TextField name={"pincode"} value={address?.pincode} onChange={handleChange} disabled={disableInput}
                               placeholder={"Pincode"} className={"flex-1"} size={"small"}/>
                </form>
                <div className={"flex justify-end gap-3"}>
                    <Button onClick={edit ? handleSubmit : () => setEdit(true)} size={"small"} variant={"contained"}
                            className={"!bg-primary !capitalize"}>{edit ? "Save Changes" : "Update Address"}</Button>
                    {edit && <Button onClick={resetValues} size={"small"}
                                     className={"!bg-orange-100 !text-red-600 !capitalize hover:!underline"}>Reset</Button>}
                    <Button onClick={() => navigate("/profile/create-new-password")} size={"small"}
                            variant={"contained"} className={"!bg-primary !capitalize"}>Change Password</Button>
                </div>
            </div>
        </div>
    </section>
}