import {formatDate} from "../../utils/format-date.js";

export default function OrderDetails({openOrder}) {
    return <div className={"bg-white p-5 h-[50vh] overflow-auto"}>
        <h3 className={"text-primary font-[400] !mb-3"}>Order Details: </h3>
        <div className={"flex gap-2 p-1 px-5 bg-orange-50 rounded-sm"}>
            <div className={"flex flex-col gap-1"}>
                <div className={"p-1 flex gap-5 items-center"}>
                    <p className={"text-[13px] font-[500]"}>Order Id: </p>
                    <p className={"text-[13px] text-gray-500"}>{openOrder?.razorpay_order_id}</p>
                </div>
                <div className={"p-1 flex gap-5 items-center"}>
                    <p className={"text-[13px] font-[500]"}>Payment Id: </p>
                    <p className={"text-[13px] text-gray-500"}>{openOrder?.payment_id || "-"}</p>
                </div>
                <div className={"p-1 flex gap-5 items-center"}>
                    <p className={"text-[13px] font-[500]"}>Payment Status: </p>
                    <p className={"text-[13px] text-gray-500"}>{openOrder?.status}</p>
                </div>
                <div className={"p-1 flex gap-5 items-start"}>
                    <p className={"text-[13px] font-[500]"}>Payment Details: </p>
                    <div className={"flex flex-col gap-2"}>
                        <div className={"flex gap-2 items-center"}>
                            <p className={"text-xs font-[500] text-blue-700"}>Total Mrp: </p>
                            <p className={"text-xs text-gray-500"}>₹ {openOrder?.total_amount}</p>
                        </div>
                        <div className={"flex gap-2 items-center"}>
                            <p className={"text-xs font-[500] text-blue-700"}>Total Discount: </p>
                            <p className={"text-xs text-gray-500"}>₹ {openOrder?.discount}</p>
                        </div>
                        <div className={"flex gap-2 items-center"}>
                            <p className={"text-xs font-[500] text-blue-700"}>Shipping Charges: </p>
                            <p className={"text-xs text-gray-500"}>{openOrder?.shipping_charges || "Free"}</p>
                        </div>
                        <div className={"flex gap-2 items-center"}>
                            <p className={"text-xs font-[500] text-blue-700"}>Delivery Charges: </p>
                            <p className={"text-xs text-gray-500"}>{openOrder?.delivery_charges || "Free"}</p>
                        </div>
                        <div className={"flex gap-2 items-center"}>
                            <p className={"text-xs font-[500] text-blue-700"}>GST: </p>
                            <p className={"text-xs text-gray-500"}>₹ {openOrder?.gst}</p>
                        </div>
                        <div className={"flex gap-2 items-center"}>
                            <p className={"text-xs font-[500] text-blue-700"}>Total Price: </p>
                            <p className={"text-xs text-gray-500"}>₹ {openOrder?.final_amount}</p>
                        </div>
                    </div>
                </div>
                <div className={"p-1 flex gap-5 items-center"}>
                    <p className={"text-[13px] font-[500]"}>Ordered At: </p>
                    <p className={"text-[13px] text-gray-500"}>{formatDate(openOrder?.created_at)}</p>
                </div>
                <div className={"p-1 flex gap-5 items-center"}>
                    <p className={"text-[13px] font-[500]"}>Delivered At: </p>
                    <p className={"text-[13px] text-gray-500"}>{openOrder?.paid_at ? formatDate(openOrder.paid_at) : "-"}</p>
                </div>
            </div>
            <div className={"flex flex-col gap-1"}>
                <div className={"p-1 flex gap-5 items-center"}>
                    <p className={"text-[13px] font-[500]"}>No Of Items: </p>
                    <p className={"text-[13px] text-gray-500"}>{openOrder?.items.length}</p>
                </div>
                <div className={"p-1 flex gap-5 items-start"}>
                    <p className={"text-[13px] font-[500]"}>Product Details: </p>
                    <table className={"border-1 border-gray-400"}>
                        <thead>
                        <tr className={"text-xs border-1 border-gray-400"}>
                            <th className={"min-w-[200px] border-1 border-gray-400 p-1 text-center"}>Title</th>
                            <th className={"min-w-[100px] border-1 border-gray-400 p-1 text-center"}>Qty</th>
                            <th className={"min-w-[100px] border-1 border-gray-400 p-1 text-center"}>Mrp</th>
                            <th className={"min-w-[100px] border-1 border-gray-400 p-1 text-center"}>Discount</th>
                            <th className={"min-w-[100px] border-1 border-gray-400 p-1 text-center"}>Item Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            openOrder?.items?.map((item) => {
                                return <tr key={item.sku_id} className={"text-xs"}>
                                    <td className={"min-w-[200px] border-1 border-gray-400 p-1 text-center"}>{item?.title}</td>
                                    <td className={"min-w-[100px] border-1 border-gray-400 p-1 text-center"}>{item?.qty}</td>
                                    <td className={"min-w-[100px] border-1 border-gray-400 p-1 text-center"}>₹ {item?.mrp}</td>
                                    <td className={"min-w-[100px] border-1 border-gray-400 p-1 text-center"}>{item?.discount}%</td>
                                    <td className={"min-w-[100px] border-1 border-gray-400 p-1 text-center"}>₹ {item?.item_price}</td>
                                </tr>
                            })
                        }
                        </tbody>

                    </table>
                </div>
                <div className={"p-1 flex gap-5 items-start"}>
                    <p className={"text-[13px] font-[500]"}>Billing Details: </p>
                    <div className={"flex flex-col gap-2"}>
                        <div className={"flex gap-2 items-center"}>
                            <p className={"text-xs font-[500] text-blue-700"}>Full Name: </p>
                            <p className={"text-xs text-gray-500"}>{openOrder?.billing_details?.name}</p>
                        </div>
                        <div className={"flex gap-2 items-center"}>
                            <p className={"text-xs font-[500] text-blue-700"}>Email: </p>
                            <p className={"text-xs text-gray-500"}>{openOrder?.billing_details?.email}</p>
                        </div>
                        <div className={"flex gap-2 items-center"}>
                            <p className={"text-xs font-[500] text-blue-700"}>Contact: </p>
                            <p className={"text-xs text-gray-500"}>{openOrder?.billing_details?.name}</p>
                        </div>
                        <div className={"flex gap-2 items-center"}>
                            <p className={"text-xs font-[500] text-blue-700"}>Address: </p>
                            <p className={"text-xs text-gray-500"}>
                                {openOrder?.billing_details?.street}, {openOrder?.billing_details?.landmark},
                            </p>
                            <p className={"text-xs text-gray-500"}>
                                {openOrder?.billing_details?.city}, {openOrder?.billing_details?.state}
                            </p>
                        </div>
                        <div className={"flex gap-2 items-center"}>
                            <p className={"text-xs font-[500] text-blue-700"}>Pincode: </p>
                            <p className={"text-xs text-gray-500"}>{openOrder?.billing_details?.pincode}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}