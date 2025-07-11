import {Button} from "@mui/material";
import {FaShoppingBag} from "react-icons/fa";
import {mapCheckoutItems} from "../utils/map-checkout-item.js";
import {createOrder, updateOrderPaymentFailed, verifyOrderPayment} from "../redux/features/checkout/checkoutThunk.js";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {notifyErrorToast, notifySuccessToast} from "../components/toasts/toasts.js";
import {clearCart} from "../redux/features/cart/cartSlice.js";
import BillingForm from "../components/billing-form/BillingForm.jsx";
import {MdError} from "react-icons/md";

export default function Checkout(){
    const [billingDetails, setBillingDetails] = useState(null);
    const {cartItems, totalAmount, gst} = useSelector(state => state.cart);
    const {user} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmitBillingDetails = (data)=>{
        setBillingDetails(data);
    }

    async function onSuccessfulPayment(response){
        const {razorpay_order_id, razorpay_payment_id, razorpay_signature} = response;
        const result = await dispatch(verifyOrderPayment({razorpay_order_id, razorpay_payment_id, razorpay_signature}))
        if(verifyOrderPayment.fulfilled.match(result)){
            await dispatch(clearCart());
            notifySuccessToast(result.payload.message);
            notifySuccessToast("You cart has been cleared!");
            navigate("/");
        }
        if(verifyOrderPayment.rejected.match(result)){
            notifyErrorToast(result.error?.message || "Failed to initiate transaction!")
        }
    }

    async function onIncompletePayment({orderId}){
        const response = await dispatch(updateOrderPaymentFailed(orderId));
        if(updateOrderPaymentFailed.fulfilled.match(response)){
            notifyErrorToast(`Order Payment failed! - ${orderId}`);
            navigate("/cart");
        }
        if(updateOrderPaymentFailed.rejected.match(response)){
            notifyErrorToast(response.error?.message || "Failed to update payment failed status!");
        }
    }

    const handlePayment = async({orderId, amount, currency, prefill})=>{
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount,
            currency,
            name: "One Stop Shopping Store",
            description: "Order Payment",
            order_id: orderId,
            handler: onSuccessfulPayment,
            modal: { ondismiss: ()=>onIncompletePayment({orderId}) },// 4111 1111 1111 1111, success@razorpay
            prefill,
            theme: {
                color: "#3399cc",
            },
        }

        const rzp = new window.Razorpay(options);
        rzp.open();
    }

    const handleCheckout = async()=>{
        const checkoutItems = mapCheckoutItems(cartItems);
        const response = await dispatch(createOrder({items: checkoutItems, billingDetails}));
        if(createOrder.fulfilled.match(response)){
            const {orderId, amount, currency} = response.payload;
            const prefill =  {
                    name: user?.firstName + " "+ user?.lastName,
                    email: user?.email
                };
            handlePayment({
                orderId,
                amount,
                currency,
                prefill
            })
        }
        if(createOrder.rejected.match(response)){
            notifyErrorToast(response.error?.message || "Failed to create order!");
            navigate("/cart");
        }
    }

    return <section className={"pages py-10"}>
        {!cartItems.length ? <div className={"container bg-white p-5 shadow-md rounded-sm"}>
            <p className={"text-sm flex items-center gap-3 text-red-600"}>
               <MdError size={"1rem"}/> Your cart is empty!
            </p>
        </div> :<div className={"container flex gap-5"}>
            <BillingForm onEdit={()=>setBillingDetails(null)} onSubmit={handleSubmitBillingDetails}/>
            <div className={"bg-white md:max-lg:w-[35%] w-[30%] p-2 px-5 shadow-md rounded-sm"}>
                        <h3 className={"font-[500] text-[14px] text-primary p-2"}>Your Order</h3>
                        <hr className={"text-gray-300"}/>
                        <div className={"flex flex-col py-3 font-[500] text-[12px] gap-2"}>
                            <div className={"flex justify-between items-center px-4"}>
                                <p>Product </p>
                                <p>SubTotal</p>
                            </div>
                            <hr className={"text-gray-300"}/>
                            <div className={"flex flex-col h-[15vh] gap-1 overflow-hidden overflow-scroll pr-3"}>
                                {cartItems.map((item)=>{
                                    return <div key={item.id} className={"flex justify-between items-center bg-orange-100 py-1 px-[3px]"}>
                                        <div className={"flex gap-3 w-[70%]"}>
                                            <p className={"whitespace-nowrap overflow-hidden text-ellipsis"}>{item.title}</p>
                                            <span>x {item.cartQty}</span>
                                        </div>
                                        <p>₹ {item.priceAfterDiscount}</p>
                                    </div>
                                })}
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
                                <p>₹ {gst}</p>
                            </div>
                            <hr/>
                            <div className={"flex justify-between items-center"}>
                                <p>Total: </p>
                                <p>₹ {totalAmount + gst}</p>
                            </div>
                        </div>
                        <Button disabled={!billingDetails} onClick={handleCheckout} variant={"contained"} className={`!w-full ${!billingDetails ? "!bg-gray-200" : "!bg-primary"} !my-2 gap-2 !capitalize`} size={"small"}>
                            <FaShoppingBag size={"0.8rem"}/> Checkout</Button>
                    </div>

        </div>}
    </section>
}