export default function ProductDetailsTab({productDetails}){
    const {details , specifications} = productDetails;
    return <div className={"py-2"}>
        <div>
            <p className={"text-[14px] font-[500] px-4"}>Details</p>
            <p className={"text-[14px] font-[400] text-gray-500 p-4"}>
                {details?.info}
            </p>
        </div>
        <div>
            <p className={"text-[14px] font-[500] px-4"}>Size & Fit</p>
            <p className={"text-[14px] font-[400] text-gray-500 p-4"}>
                {details?.sizeAndFit}
            </p>
        </div>
        <div>
            <p className={"text-[14px] font-[500] px-4"}>Material & Care</p>
            <p className={"text-[14px] font-[400] text-gray-500 p-4"}>
                <span>
                    {details?.material}, {details?.care}
                </span>
            </p>
        </div>
        {specifications && <div>
            <p className={"text-[14px] font-[500] px-4"}>Specifications</p>
            <table className={"border border-gray-200 !m-4"}>
                <thead>
                <tr className={"text-[13px] text-center font-[400]"}>
                    <th className={"w-[10rem] p-1 border border-gray-200"}>Neck</th>
                    <th className={"w-[10rem] p-1 border border-gray-200"}>Sleeves</th>
                    <th className={"w-[10rem] p-1 border border-gray-200"}>Length</th>
                </tr>
                </thead>
                <tbody>
                <tr className={"text-[13px] text-center font-[400]"}>
                    <td className={"w-[10rem] p-1 border border-gray-200"}>{specifications?.neck || "-"}</td>
                    <td className={"w-[10rem] p-1 border border-gray-200"}>{specifications?.sleeves || "-"}</td>
                    <td className={"w-[10rem] p-1 border border-gray-200"}>{specifications?.length || "-"}</td>
                </tr>
                </tbody>
            </table>
        </div>}
    </div>
}