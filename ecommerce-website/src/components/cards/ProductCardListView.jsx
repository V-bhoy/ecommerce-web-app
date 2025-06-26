import {Link} from "react-router-dom";
import {Button, Rating} from "@mui/material";
import {MdZoomOutMap} from "react-icons/md";
import {FaRegHeart} from "react-icons/fa6";
import {LuGitCompareArrows} from "react-icons/lu";

export default function ProductCardListView({product}){
    return <div className={"productCard rounded-md bg-orange-50 flex gap-3 h-[220px]"}>
        <div className={"group imageWrapper w-[30%] rounded-l-md relative overflow-hidden"}>
            <Link to={`products/details/${product.id}`}>
                <img className={"w-full h-full rounded-l-md overflow-hidden transition"}
                     src={product.image_url}
                     alt={"poster-image"}
                />
            </Link>
            <span className={"discount font-[500] absolute top-2 left-3 bg-primary text-white text-[13px] p-1 rounded-md"}>
                {product.discount}%
            </span>
            <div className={"actions absolute top-[-200px] right-3 z-50 flex flex-col items-center gap-4  transition-all duration-400 group-hover:top-3"}>
                <Button className={"!text-black hover:!text-white !h-[30px] !w-[30px] !min-w-[30px] !rounded-full !bg-white hover:!bg-primary"}>
                    <MdZoomOutMap/>
                </Button>
                <Button className={"!text-black hover:!text-white !h-[30px] !w-[30px] !min-w-[30px] !rounded-full !bg-white hover:!bg-primary"}>
                    <FaRegHeart/>
                </Button>
            </div>
        </div>
        <div className={"info px-2 py-6 flex flex-col gap-1"}>
            <Link className={"link"} to={`/products/details/${product.id}`}><h3 className={"text-[14px] font-[500]"}>{product.title}</h3></Link>
            <p className={"text-[12px] text-primary font-[500]"}>{product.info}</p>
            <p className={"text-[11px] text-gray-500"}>{product.description}</p>
            <Rating size={"small"} defaultValue={4} readOnly/>
            <div>
                <span className={"text-[13px] text-gray-500 line-through font-[500] !mr-2"}>₹{product.originalPrice}</span>
                <span className={"text-[13px] font-[500] text-primary"}>₹{product.priceAfterDiscount}</span>
            </div>
            <Button variant={"contained"} className={" !h-[28px] !text-[12px] !w-[15%] !min-w-[15%] !bg-primary"} size={"small"}>Add To Cart</Button>
        </div>
    </div>
}