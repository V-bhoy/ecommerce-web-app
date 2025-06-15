import {Link} from "react-router-dom";
import {Box, Button, Modal, Rating} from "@mui/material";
import {MdZoomOutMap} from "react-icons/md";
import {FaRegHeart} from "react-icons/fa6";
import {LuGitCompareArrows} from "react-icons/lu";
import {useState} from "react";
import ProductDetailsSection from "../product-details/ProductDetailsSection.jsx";

export default function ProductCard({product}){
    const [openModal, setOpenModal] = useState(false);

    return <div className={"productCard rounded-md bg-orange-50"}>
        <div className={"group imageWrapper h-[220px] rounded-t-md relative overflow-hidden"}>
            <Link to={`/products/${product.category}/${product.subCategory}/${product.id}`}>
                <img className={"w-full h-full rounded-t-md overflow-hidden transition"}
                     src={product.imageUrl}
                     alt={"poster-image"}
                />
            </Link>
            <span className={"discount font-[500] absolute top-2 left-3 bg-primary text-white text-[13px] p-1 rounded-md"}>
                {product.discount}%
            </span>
            <div className={"actions absolute top-[-200px] right-3 z-50 flex flex-col items-center gap-4  transition-all duration-400 group-hover:top-3"}>
                <Button onClick={()=>setOpenModal(true)} className={"!text-black hover:!text-white !h-[30px] !w-[30px] !min-w-[30px] !rounded-full !bg-white hover:!bg-primary"}>
                    <MdZoomOutMap/>
                </Button>
                <Modal open={openModal} onClose={()=>setOpenModal(false)}>
                    <Box sx={{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "80%"}}>
                        <ProductDetailsSection/>
                    </Box>
                </Modal>
                <Button className={"!text-black hover:!text-white !h-[30px] !w-[30px] !min-w-[30px] !rounded-full !bg-white hover:!bg-primary"}>
                    <FaRegHeart/>
                </Button>
                <Button className={"!text-black hover:!text-white !h-[30px] !w-[30px] !min-w-[30px] !rounded-full !bg-white hover:!bg-primary"}>
                    <LuGitCompareArrows/>
                </Button>
            </div>
        </div>
        <div className={"info py-3 px-2 flex flex-col gap-1"}>
            <Link className={"link"} to={"/"}><h3 className={"text-[14px] font-[500]"}>{product.title}</h3></Link>
            <p className={"text-[12px] text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis"}>{product.info}</p>
            <Rating size={"small"} defaultValue={4} readOnly/>
            <div>
                <span className={"text-[13px] text-gray-500 line-through font-[500] !mr-2"}>₹{product.originalPrice}</span>
                <span className={"text-[13px] font-[500] text-primary"}>₹{product.priceAfterDiscount}</span>
            </div>
        </div>
    </div>
}