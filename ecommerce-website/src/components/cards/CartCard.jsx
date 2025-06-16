import {Link} from "react-router-dom";
import {Select, TextField} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {GiReturnArrow} from "react-icons/gi";
import {RiDeleteBinLine} from "react-icons/ri";
import {TiStarFullOutline} from "react-icons/ti";
import {IoClose} from "react-icons/io5";

export default function CartCard(){
    return <div className={"border border-gray-200 h-[20vh] rounded-md flex gap-4 relative bg-white"}>
        <div className={"group imageWrapper w-[25%] rounded-l-md relative overflow-hidden"}>
            <Link to={"/products/women/tops/1"}>
                <img className={"w-full h-full rounded-l-md overflow-hidden transition"}
                     src={"https://cdn.pixabay.com/photo/2023/09/02/11/43/woman-8228723_1280.jpg"}
                     alt={"poster-image"}
                />
            </Link>
            <span className={"discount font-[500] absolute top-2 left-2 bg-primary text-white text-[13px] p-1 rounded-md"}>
                10% off
            </span>
        </div>
        <div className={"p-2 info px-2 flex flex-col gap-1 w-[75%]"}>
           <h3 className={"text-[15px] text-primary font-[400]"}>Checked Casual Top</h3>
            <span className={"text-[12px] font-[500]"}>Cotton top, full sleeves, for women</span>
            <div className={"flex gap-5 !my-2"}>
                <div className={"flex gap-2 items-center"}>
                  <p className={"text-[13px] font-[500]"}>Size: </p>
                    <Select className={"w-[4rem] select"} value={1} size={"small"} variant={"outlined"}>
                        <MenuItem value={1}>S</MenuItem>
                        <MenuItem value={2}>M</MenuItem>
                        <MenuItem value={3}>L</MenuItem>
                        <MenuItem value={4}>XL</MenuItem>
                        <MenuItem value={5}>XXL</MenuItem>
                    </Select>
                </div>
                <div className={"flex gap-2 items-center"}>
                    <p className={"text-[13px] font-[500]"}>Qty: </p>
                    <TextField value={1} slotProps={{htmlInput: {min: 0}}} className={"w-[4rem] qty-input"} size={"small"} type={"number"}/>
                </div>
            </div>
            <div className={"flex gap-2 items-center"}>
                <span className={"text-[13px] font-[500] !mr-1"}>Price: </span>
                <span className={"text-[14px] text-gray-500 line-through font-[500]"}>₹5000</span>
                <span className={"text-[14px] font-[400] text-gray-800 bg-orange-100 px-2 rounded-sm"}>₹4500</span>
            </div>
            <div className={"flex gap-1 items-center"}>
                <GiReturnArrow />
                <span className={"text-[12px] text-red-600 px-1"}>14 day return available</span>
            </div>
            <div className={"flex gap-2 absolute top-3 right-3 items-center"}>
                <p className={"flex items-center gap-1 text-[13px] bg-green-600 px-2 py-1 rounded-sm text-white"}>
                    4.5
                    <TiStarFullOutline/>
                </p>
                <IoClose size={"1rem"} className={"cursor-pointer hover:text-red-600"}/>
            </div>

        </div>
    </div>
}