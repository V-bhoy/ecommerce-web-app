import {Button, TextField} from "@mui/material";
import {FaShoppingBag} from "react-icons/fa";

export default function Checkout(){
    return <section className={"pages py-10"}>
        <div className={"container flex gap-5"}>
            <div className={"bg-white h-[50vh] w-[70%] p-3 px-5 shadow-md rounded-sm"}>
                <h1 className={"text-primary px-2 font-[500]"}>Billing Details</h1>
                <form className={"w-full py-3 flex flex-col gap-3"}>
                    <div className={"flex items-center gap-2"}>
                        <TextField placeholder={"Full Name"} className={"flex-1"} size={"small"}/>
                        <TextField placeholder={"Email"} type={"email"} className={"flex-1"} size={"small"}/>
                    </div>
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
            </div>
            <div className={"bg-white w-[30%] p-2 px-5 shadow-md rounded-sm"}>

                        <h3 className={"font-[500] text-[14px] text-primary p-2"}>Your Order</h3>
                        <hr className={"text-gray-300"}/>
                        <div className={"flex flex-col py-3 font-[500] text-[12px] gap-2"}>
                            <div className={"flex justify-between items-center px-4"}>
                                <p>Product </p>
                                <p>SubTotal</p>
                            </div>
                            <hr className={"text-gray-300"}/>
                            <div className={"flex flex-col h-[15vh] gap-1 overflow-hidden overflow-scroll pr-3"}>
                                <div className={"flex justify-between items-center bg-orange-100 py-1 px-[3px]"}>
                                    <div className={"flex gap-3"}>
                                        <p className={"w-[70%] whitespace-nowrap overflow-hidden text-ellipsis"}>Product Sarfaraass casual top</p>
                                        <span>x 1</span>
                                    </div>
                                    <p>₹ 2000</p>
                                </div>
                                <div className={"flex justify-between items-center bg-orange-100 py-1 px-[3px]"}>
                                    <div className={"flex gap-3"}>
                                        <p className={"w-[70%] whitespace-nowrap overflow-hidden text-ellipsis"}>Product Sarfaraass casual top</p>
                                        <span>x 1</span>
                                    </div>
                                    <p>₹ 2000</p>
                                </div>
                                <div className={"flex justify-between items-center bg-orange-100 py-1 px-[3px]"}>
                                    <div className={"flex gap-3"}>
                                        <p className={"w-[70%] whitespace-nowrap overflow-hidden text-ellipsis"}>Product Sarfaraass casual top</p>
                                        <span>x 1</span>
                                    </div>
                                    <p>₹ 2000</p>
                                </div>
                            </div>
                            <hr className={"text-gray-300"} />
                            <div className={"flex justify-between items-center"}>
                                <p>Shipping Charges: </p>
                                <p>Free</p>
                            </div>
                            <div className={"flex justify-between items-center"}>
                                <p>Delivery Charges: </p>
                                <p>Free</p>
                            </div>
                            <div className={"flex justify-between items-center"}>
                                <p>GST: </p>
                                <p>₹ 20</p>
                            </div>
                            <hr/>
                            <div className={"flex justify-between items-center"}>
                                <p>Total: </p>
                                <p>₹ 6000</p>
                            </div>
                        </div>
                        <Button variant={"contained"} className={"!w-full !bg-primary !my-2 gap-2 !capitalize"} size={"small"}>
                            <FaShoppingBag size={"0.8rem"}/> Checkout</Button>
                    </div>

        </div>
    </section>
}