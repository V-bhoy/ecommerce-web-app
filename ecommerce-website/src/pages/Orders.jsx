export default function Orders(){
    return <section className={"pages py-10"}>
        <div className={"container bg-white p-3 px-5 shadow-md rounded-sm"}>
            <h1 className={"text-primary px-2 font-[500]"}>My Orders</h1>
            <div className={"!my-5 w-full overflow-x-auto shadow-md pb-4"}>
                <table className={"table-auto orders-table"}>
                    <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Payment Id</th>
                        <th>No of Products</th>
                        <th>Product Details</th>
                        <th>Total MRP</th>
                        <th>Discount Price</th>
                        <th>Delivery Charges</th>
                        <th>Shipping Charges</th>
                        <th>GST Charges</th>
                        <th>Total Price</th>
                        <th>Ordered At</th>
                        <th>Status</th>
                        <th>Delivered At</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>order-id-11111</td>
                        <td>payment-id-11111</td>
                        <td>3</td>
                        <td>
                            <p className={"cursor-pointer text-blue-700 hover:underline"}>Click to view details</p>
                        </td>
                        <td>5000</td>
                        <td>2000</td>
                        <td>0</td>
                        <td>0</td>
                        <td>20</td>
                        <td>3020</td>
                        <td>5 june 2025</td>
                        <td>Delivered</td>
                        <td>12 june 2025</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
}