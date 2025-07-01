export default function SelectQty({ qty, handleQty}){
    return <div className={"flex items-center gap-4"}>
        <span className={"text-[15px] font-[500] text-primary"}>Qty: </span>
        <div className={"h-[34px] w-[5rem] pt-1 border border-gray-200 rounded-sm"}>
            <input
                className={"px-3 w-full text-gray-600 text-[13px] focus:outline-none"}
                type={"number"}
                min={0}
                value={qty}
                onChange={handleQty}
            />
        </div>
    </div>
}