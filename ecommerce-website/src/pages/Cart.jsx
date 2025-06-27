import CartCard from "../components/cards/CartCard.jsx";
import {Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {IoClose} from "react-icons/io5";
import {clearCart} from "../redux/features/cart/cartSlice.js";
import {createPayment} from "../redux/features/checkout/checkoutThunk.js";
import {mapCheckoutItems} from "../utils/map-checkout-item.js";

export default function Cart(){
    const {cartItems, totalMrp, totalDiscount, totalAmount} = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const enableCheckout = cartItems.length>0 && cartItems.every(item => item.cartVariant !== null);

    const handleCheckout = ()=>{
        const checkoutItems = mapCheckoutItems(cartItems);
        console.log(checkoutItems);
        dispatch(createPayment(checkoutItems))
    }

    return <section>
        <div className={"container p-5"}>
            <h3 className={"font-[400] text-[1.5rem] text-primary px-4 !mb-4"}>Shopping Cart ({cartItems.length})</h3>
            {cartItems.length > 0 && <p onClick={()=>dispatch(clearCart())} className={"flex items-center justify-end gap-1 w-[72%] text-sm cursor-pointer font-[500] hover:underline !mb-1 text-red-600"}>Clear Cart <IoClose/></p>}
            <div className={"flex gap-5 !mb-5"}>
                <div className={"shadow-md rounded-sm flex flex-col gap-3 h-[60vh] cart-items-wrapper p-5 bg-white w-[75%] overflow-hidden overflow-y-scroll border border-gray-200"}>
                    {cartItems?.map((item)=><CartCard key={item.id} item={item}/>)}
                </div>
                <div className={"w-[25%]"}>
                    <div className={"border border-gray-200 bg-white py-2 px-3 rounded-sm"}>
                        <h3 className={"font-[500] text-[14px] text-primary py-2"}>Pricing Details ({cartItems.length} item)</h3>
                        <hr className={"text-gray-300"}/>
                        <div className={"flex flex-col py-3 font-[500] text-[12px] gap-2 px-2"}>
                           <div className={"flex justify-between items-center"}>
                               <p>Total MRP: </p>
                               <p>₹ {totalMrp}</p>
                           </div>
                            <div className={"flex justify-between items-center"}>
                                <p>Discount on MRP: </p>
                                <p>₹ {totalDiscount}</p>
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
                                <p>Other Taxes: </p>
                                <p>5%</p>
                            </div>
                            <hr/>
                            <div className={"flex justify-between items-start"}>
                                <p>Sub Total: </p>
                                <div>
                                    <p className={"text-end"}>₹ {totalAmount}</p>
                                    <p className={"text-xs text-red-600"}>(taxes excluded)</p>
                                </div>
                            </div>
                        </div>
                        <Button disabled={!enableCheckout} onClick={handleCheckout} variant={"contained"} className={`!w-full  ${!enableCheckout ? "!bg-gray-200" : "!bg-primary"} !my-2`} size={"small"}>Checkout</Button>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
