import {Slider} from "@mui/material";
import getProductSuggestion from "../../utils/get-product-suggestion.js";

export default function ReviewSlider({title, value}){
    const suggestion = getProductSuggestion(value);
    return <div className={"px-5 py-2"}>
        <p  className={"text-[13px] font-[500] text-gray-600"}>{title}</p>
        <div className={"flex gap-4"}>
            <Slider size={"small"} value={value} aria-readonly/>
            <p className={"text-[13px] w-[40%] font-[500]"}>{value}% - {suggestion}</p>
        </div>
    </div>
}