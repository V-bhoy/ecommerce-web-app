import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllOrders} from "../redux/features/checkout/checkoutThunk.js";
import {Box, Modal} from "@mui/material";
import {IoClose} from "react-icons/io5";
import OrderDetails from "../components/orders/OrderDetails.jsx";

export default function Orders(){
    const dispatch = useDispatch();
    const {isLoading, orders} = useSelector(state=>state.checkout);
    const [openOrder, setOpenOrder] = useState(null);


    useEffect(() => {
        dispatch(getAllOrders());
    }, []);

    if(isLoading){
        return <div className="w-screen h-screen flex items-center justify-center">
            <span>Loading...</span>
        </div>
    }
    return <section className={"pages py-10"}>
        <div className={"container bg-white p-3 px-5 shadow-md rounded-sm"}>
            <h1 className={"text-primary px-2 font-[500]"}>My Orders</h1>
            <div className={"!my-5 w-full overflow-x-auto shadow-md pb-4"}>
                <table className={"table-auto orders-table"}>
                    <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Total Price</th>
                        <th>Status</th>
                        <th>Product Details</th>
                        <th>Ordered At</th>
                        <th>Delivered At</th>
                    </tr>
                    </thead>
                    <tbody>
                    {orders?.map((order)=><tr key={order.id}>
                        <td>{order.razorpay_order_id}</td>
                        <td>₹ {order.final_amount}</td>
                        <td>{order.status}</td>
                        <td>
                            <p onClick={()=>setOpenOrder(order)} className={"cursor-pointer text-blue-700 hover:underline"}>Click to view details</p>
                        </td>
                        <td>{new Date(order?.created_at).toLocaleString("en-US", {
                            timeZone: "Asia/Kolkata",
                        })}</td>
                        <td>{order?.paidAt ? new Date(order?.paid_at).toLocaleString("en-US", {
                            timeZone: "Asia/Kolkata",
                        }) : "-"}</td>
                    </tr>)}
                    </tbody>
                </table>
                <Modal open={openOrder} onClose={()=>setOpenOrder(null)} className={"focus:outline-none"}>
                    <Box className={"relative focus:outline-none bg-white"} sx={{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80%"}}>
                        <IoClose onClick={()=>setOpenOrder(null)} size={"1.3rem"} className={"absolute top-3 right-15  cursor-pointer text-gray-600"}/>
                        <OrderDetails openOrder={openOrder}/>
                    </Box>
                </Modal>
            </div>
        </div>
    </section>
}