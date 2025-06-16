import CartCard from "../components/cards/CartCard.jsx";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

export default function Cart(){
    const navigate = useNavigate();
    return <section>
        <div className={"container p-5"}>
            <h3 className={"font-[400] text-[1.5rem] text-primary px-4"}>Shopping Cart (3)</h3>
            <div className={"flex gap-5 !my-5"}>
                <div className={"shadow-md rounded-sm flex flex-col gap-3 h-[60vh] cart-items-wrapper p-5 bg-white w-[75%] overflow-hidden overflow-y-scroll border border-gray-200"}>
                    <CartCard/>
                    <CartCard/>
                    <CartCard/>
                </div>
                <div className={"w-[25%]"}>
                    <div className={"border border-gray-200 bg-white py-2 px-3 rounded-sm"}>
                        <h3 className={"font-[500] text-[14px] text-primary py-2"}>Pricing Details (3 items)</h3>
                        <hr className={"text-gray-300"}/>
                        <div className={"flex flex-col py-3 font-[500] text-[12px] gap-2 px-2"}>
                           <div className={"flex justify-between items-center"}>
                               <p>Total MRP: </p>
                               <p>₹ 5000</p>
                           </div>
                            <div className={"flex justify-between items-center"}>
                                <p>Discount on MRP: </p>
                                <p>₹ 2000</p>
                            </div>
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
                                <p>₹ 3020</p>
                            </div>
                        </div>
                        <Button onClick={()=>navigate("/checkout")} variant={"contained"} className={"!w-full !bg-primary !my-2"} size={"small"}>Checkout</Button>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
