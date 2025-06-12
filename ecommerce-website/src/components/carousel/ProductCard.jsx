import {Link} from "react-router-dom";
import {Button, Rating} from "@mui/material";
import {MdZoomOutMap} from "react-icons/md";
import {FaRegHeart} from "react-icons/fa6";
import {LuGitCompareArrows} from "react-icons/lu";

export default function ProductCard(){
    return <div className={"productCard rounded-md bg-orange-50"}>
        <div className={"group imageWrapper h-[250px] rounded-t-md relative overflow-hidden"}>
            <Link to={"/"}>
                <img className={"w-full h-full rounded-t-md overflow-hidden transition"}
                     src={"https://cdn.pixabay.com/photo/2022/12/04/07/03/woman-7633843_1280.jpg"}
                     alt={"poster-image"}
                />
            </Link>
            <span className={"discount font-[500] absolute top-2 left-3 bg-primary text-white text-[13px] p-1 rounded-md"}>
                20%
            </span>
            <div className={"actions absolute top-[-200px] right-3 z-50 flex flex-col items-center gap-4  transition-all duration-400 group-hover:top-3"}>
                <Button className={"!text-black hover:!text-white !h-[30px] !w-[30px] !min-w-[30px] !rounded-full !bg-white hover:!bg-primary"}>
                    <MdZoomOutMap/>
                </Button>
                <Button className={"!text-black hover:!text-white !h-[30px] !w-[30px] !min-w-[30px] !rounded-full !bg-white hover:!bg-primary"}>
                    <FaRegHeart/>
                </Button>
                <Button className={"!text-black hover:!text-white !h-[30px] !w-[30px] !min-w-[30px] !rounded-full !bg-white hover:!bg-primary"}>
                    <LuGitCompareArrows/>
                </Button>
            </div>
        </div>
        <div className={"info py-3 px-2 flex flex-col gap-1"}>
            <Link className={"link"} to={"/"}><h3 className={"text-[15px] font-[500]"}>Libas Kurta Set</h3></Link>
            <p className={"text-[13px] text-gray-500"}>Silk kurta set in teal with ombre georgette dupatta.</p>
            <Rating size={"small"} defaultValue={4} readOnly/>
            <div>
                <span className={"text-[14px] text-gray-500 line-through font-[500] !mr-2"}>₹5000</span>
                <span className={"text-[14px] font-[500] text-primary"}>₹3000</span>
            </div>
        </div>
    </div>
}