import {Rating} from "@mui/material";

export default function RatingFilter(){
    return <div className={"rating-filter border-t border-t-gray-200 px-5 py-3"}>
        <h3 className={"text-[15px] font-[500] "}>Rating</h3>
        <div className={"py-3"}>
            <Rating defaultValue={5} size={"small"}/>
        </div>
    </div>
}