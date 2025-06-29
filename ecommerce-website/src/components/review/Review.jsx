import {Rating} from "@mui/material";
import {formatDate} from "../../utils/format-date.js";

export default function Review({review}) {
    return <div className={"border border-gray-200 pt-2 pb-3 pr-5 !mx-2 bg-orange-50 rounded-md"}>
        <div className={"flex justify-between"}>
            <p className={"text-[13px] font-[400] text-gray-500 p-4"}>
                {review?.review}
            </p>
            <Rating size={"small"} value={review?.rating} readOnly/>
        </div>
        <span className={"text-[12px] font-[400] p-4"}>
            {review?.first_name +" "+review?.last_name} | {formatDate(review?.created_at)}
        </span>
    </div>
}