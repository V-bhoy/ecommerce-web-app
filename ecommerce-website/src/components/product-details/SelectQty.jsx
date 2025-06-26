export default function SelectQty({availableQty, qty, setQty}){
    const handleQty=(e)=>{
            let value = e.target.value;
            if(value) value =  Math.min(availableQty, Number(e.target.value));
            setQty(value);
    }
    return <div className={"flex items-center gap-4"}>
        <span className={"text-[15px] font-[500] text-primary"}>Qty: </span>
        <div className={"h-[34px] w-[5rem] pt-1 border border-gray-200 rounded-sm"}>
            <input
                className={"px-3 w-full text-gray-600 text-[13px] focus:outline-none"}
                type={"number"}
                min={0}
                max={availableQty}
                value={qty}
                onChange={handleQty}
            />
        </div>
    </div>
}