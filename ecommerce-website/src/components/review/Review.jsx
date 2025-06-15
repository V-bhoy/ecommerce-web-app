import {Rating} from "@mui/material";

export default function Review({review}) {
    return <div className={"border border-gray-200 pt-2 pb-3 pr-5 !mx-2 bg-orange-50 rounded-md"}>
        <div className={"flex justify-between"}>
            <p className={"text-[13px] font-[400] text-gray-500 p-4"}>
                {review?.comment}
            </p>
            <Rating size={"small"} value={review?.rating}/>
        </div>
        <span className={"text-[12px] font-[400] p-4"}>
            {review?.customerName} | {review?.createdAt}
        </span>
    </div>
}