import MagnifyProduct from "../magnify-product/MagnifyProduct.jsx";
import {Button, Rating} from "@mui/material";
import {FaCartShopping, FaRegHeart} from "react-icons/fa6";
import {IoShareSocial} from "react-icons/io5";
import {useState} from "react";

export default function ProductDetailsSection(){
    const [activeSizeIndex, setActiveSizeIndex] = useState(0);
    return   <div className={"container flex px-6 py-5 gap-4 bg-white"}>
        <MagnifyProduct/>
        <div className={"product-details p-2 flex flex-col gap-2 w-[50%]"}>
            <div className={"py-2"}>
                <h3 className={"text-[1.8rem] text-primary font-[300]"}>White Chiffon Top</h3>
                <div className={"flex gap-3"}>
                    <Rating size={"small"} value={4}/>
                    <span className={"text-[13px] text-gray-400"}>Reviews (5)</span>
                </div>
            </div>
            <p className={"text-[14px] font-[500]"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className={"text-[14px] font-[400] text-gray-500"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                Duis aute irure dolor in reprehenderit in voluptate velit esse.
            </p>
            <div className={"flex gap-5 py-3 px-1"}>
                        <span className={"text-[1.5rem] text-gray-500 line-through font-[300]"}>
                            ₹{5000}
                        </span>
                <span className={"text-[1.5rem] font-[300] text-primary"}>₹{3500}/-</span>
            </div>
            <div className={"px-1 py-4 flex flex-col gap-3"}>
                <div>
                    <p className={"text-center text-[13px] bg-green-100 px-2 py-1 text-green-700 w-[10rem] rounded-sm"}>In Stock - Available (5)</p>
                    <span className={"text-[12px] text-gray-400 px-1"}>
                                Free Shipping - Delivery estimated in 2-3 days.
                            </span>
                </div>
                <div className={"flex items-center gap-4"}>
                    <span className={"text-[15px] font-[500] text-primary"}>Size: </span>
                    <div className={"flex items-center gap-2"}>
                        <Button onClick={()=>setActiveSizeIndex(0)}
                                className={`transition sizeBtn ${activeSizeIndex===0 ? "active" : ""}`}>S</Button>
                        <Button onClick={()=>setActiveSizeIndex(1)}
                                className={`transition sizeBtn ${activeSizeIndex===1 ? "active" : ""}`} >M</Button>
                        <Button onClick={() =>setActiveSizeIndex(2)}
                                className={`transition sizeBtn ${activeSizeIndex===2 ? "active" : ""}`} >L</Button>
                        <Button onClick={()=>setActiveSizeIndex(3)}
                                className={`transition sizeBtn ${activeSizeIndex===3? "active" : ""}`} >XL</Button>
                        <Button onClick={()=>setActiveSizeIndex(4)}
                                className={`transition sizeBtn ${activeSizeIndex===4 ? "active" : ""}`} >XXL</Button>
                    </div>
                </div>
                <div className={"flex items-center gap-4"}>
                    <span className={"text-[15px] font-[500] text-primary"}>Qty: </span>
                    <div className={"h-[34px] w-[5rem] pt-1 border border-gray-200 rounded-sm"}>
                        <input defaultValue={1}
                               className={"px-3 w-full text-gray-600 text-[13px] focus:outline-none"}
                               type={"number"}
                               min={0}/>
                    </div>
                </div>
            </div>
            <div className={"py-4 px-2 flex gap-4"}>
                <Button className={"!bg-primary !text-[13px] !font-[500]"} variant={"contained"} size={"small"}>
                    <FaCartShopping className={"!mr-2"}/>Add To Cart
                </Button>
                <div className={"shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_1px_3px_1px_rgba(60,64,67,0.15)] flex items-center gap-2 cursor-pointer bg-orange-100 text-primary text-[14px] p-1 px-3 rounded-md hover:bg-secondary hover:text-white transition"}>
                    <FaRegHeart/><span>Add To Wishlist</span>
                </div>
                <div className={"shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_1px_3px_1px_rgba(60,64,67,0.15)] flex items-center gap-2 cursor-pointer bg-orange-100 text-primary text-[14px] p-1 px-3 rounded-md hover:bg-secondary hover:text-white transition"}>
                    <IoShareSocial/><span>Share</span>
                </div>
            </div>
        </div>
    </div>
}