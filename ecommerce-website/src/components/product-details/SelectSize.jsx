import {Button} from "@mui/material";

export default function SelectSize({sizes, size, handleSize, variants}){
    const sizeAvailability = variants?.reduce((acc, variant) => {
        acc[variant.size] = variant.qty > 0;
        return acc;
    }, {});


    return <div className={"flex items-center gap-4"}>
        <span className={"text-[15px] font-[500] text-primary"}>Size: </span>
        <div className={"flex items-center gap-2"}>
            {sizes.map((s, index)=>
            {     const disabled = !sizeAvailability?.[s];
                return <Button key={index}
                        onClick={()=>handleSize(s)}
                        disabled={disabled}
                        className={`${disabled ? "!bg-gray-100 !text-gray-300" : ""} transition sizeBtn ${s===size? "active" : ""}`}>
                    {s}
                </Button>
            })}
        </div>
    </div>
}