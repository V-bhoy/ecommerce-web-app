import {Button} from "@mui/material";

export default function SelectSize({sizes, size, available, handleSize}){

    return <div className={"flex items-center gap-4"}>
        <span className={"text-[15px] font-[500] text-primary"}>Size: </span>
        <div className={"flex items-center gap-2"}>
            {sizes.map((s, index)=>
            {
                const disabled = !available?.includes(s);
                 return <Button key={index}
                                value={s}
                        onClick={handleSize}
                        disabled={disabled}
                        className={`${disabled ? "!bg-gray-100 !text-gray-300" : ""} transition sizeBtn ${s===size? "active" : ""}`}>
                    {s}
                </Button>
        })}
        </div>
    </div>
}