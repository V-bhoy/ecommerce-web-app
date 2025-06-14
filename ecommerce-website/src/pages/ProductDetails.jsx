import MagnifyProduct from "../components/magnify-product/MagnifyProduct.jsx";
import {Button, Rating, Slider} from "@mui/material";
import {useState} from "react";
import {FaCartShopping, FaRegHeart, FaRegThumbsDown, FaRegThumbsUp, FaThumbsUp} from "react-icons/fa6";
import {IoShareSocial} from "react-icons/io5";

export default function ProductDetails(){
    const [activeSizeIndex, setActiveSizeIndex] = useState(0);
    const [activeTab, setActiveTab] = useState(0);


    return <section>
        <div className={"container flex py-5 gap-4"}>
                <MagnifyProduct/>
                <div className={"product-details p-2 flex flex-col gap-2 w-[50%]"}>
                    <div className={"py-2"}>
                        <h3 className={"text-[1.8rem] text-primary font-[300]"}>White Chiffon Top</h3>
                        <div className={"flex gap-3"}>
                            <Rating size={"small"} value={4}/>
                            <span className={"text-[13px] text-gray-400"}>Review (5)</span>
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
        <div className={"container product-info !mb-5"}>
            <div className={"flex items-center gap-4 text-[14px] font-[500] p-3"}>
                <span onClick={()=>setActiveTab(0)} className={`link cursor-pointer ${activeTab===0 ? "text-primary" : ""}`}>Description</span>
                <span onClick={()=>setActiveTab(1)}  className={`link cursor-pointer ${activeTab===1 ? "text-primary" : ""}`}>Product Details</span>
                <span onClick={()=>setActiveTab(2)}  className={`link cursor-pointer ${activeTab===2 ? "text-primary" : ""}`}>Reviews</span>
            </div>
            <div className={"border border-gray-200 w-full p-2"}>
                {activeTab===0 && <p className={"text-[14px] font-[400] text-gray-500 p-4"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse.
                </p>
                }
                {
                    activeTab === 1 && <div className={"py-2"}>
                        <div>
                            <p className={"text-[14px] font-[500] px-4"}>Details</p>
                            <p className={"text-[14px] font-[400] text-gray-500 p-4"}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse.
                            </p>
                        </div>
                        <div>
                            <p className={"text-[14px] font-[500] px-4"}>Size & Fit</p>
                            <p className={"text-[14px] font-[400] text-gray-500 p-4"}>
                                The model (height 5'8) is wearing a size S
                            </p>
                        </div>
                        <div>
                            <p className={"text-[14px] font-[500] px-4"}>Material & Care</p>
                            <p className={"text-[14px] font-[400] text-gray-500 p-4"}>
                                <span>96% Chiffon 4% Georgette, Machine Wash</span>
                            </p>
                        </div>
                        <div>
                            <p className={"text-[14px] font-[500] px-4"}>Specifications</p>
                            <table className={"border border-gray-200 !m-4"}>
                                <thead>
                                <tr className={"text-[13px] text-center font-[400]"}>
                                    <th className={"w-[10rem] p-1 border border-gray-200"}>Neck</th>
                                    <th className={"w-[10rem] p-1 border border-gray-200"}>Sleeves</th>
                                    <th className={"w-[10rem] p-1 border border-gray-200"}>Length</th>
                                </tr>
                                </thead>
                                <tbody>
                                   <tr className={"text-[13px] text-center font-[400]"}>
                                       <td className={"w-[10rem] p-1 border border-gray-200"}>Round</td>
                                       <td className={"w-[10rem] p-1 border border-gray-200"}>Half</td>
                                       <td className={"w-[10rem] p-1 border border-gray-200"}>Mini</td>
                                   </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                }
                {
                    activeTab===2 && <div className={"py-2"}>
                        <div>
                            <p className={"text-[14px] font-[500] px-4 !mb-2"}>What customers said</p>
                            <div className={"w-[40%] px-5 py-2"}>
                                <p  className={"text-[13px] font-[500] text-gray-600"}>Fit</p>
                                <div className={"flex gap-4"}>
                                    <Slider size={"small"}/>
                                    <p className={"text-[13px] w-[40%] font-[500]"}>85% - Just Right</p>
                                </div>
                            </div>
                            <div className={"w-[40%] px-5 py-2"}>
                                <p  className={"text-[13px] font-[500] text-gray-600"}>Length</p>
                                <div className={"flex gap-4"}>
                                    <Slider size={"small"}/>
                                    <p className={"text-[13px] w-[40%] font-[500]"}>85% - Just Right</p>
                                </div>
                            </div>
                            <div className={"w-[40%] px-5 py-2"}>
                                <p  className={"text-[13px] font-[500] text-gray-600"}>Transparency</p>
                                <div className={"flex gap-4"}>
                                    <Slider size={"small"}/>
                                    <p className={"text-[13px] w-[40%] font-[500]"}>85% - Just Right</p>
                                </div>
                            </div>
                            <div>
                                <p className={"text-[14px] font-[500] px-4 !my-2"}>Customer Reviews</p>
                                <div className={"flex flex-col gap-4"}>
                                    <div className={"border border-gray-200 py-2 pr-5 !mx-4"}>
                                        <div className={"flex justify-between"}>
                                            <p className={"text-[13px] font-[400] text-gray-500 p-4"}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                                                Duis aute irure dolor in reprehenderit in voluptate velit esse.
                                            </p>
                                            <Rating size={"small"} value={4}/>
                                        </div>
                                        <span className={"text-[12px] font-[400] p-4"}>
                                            Shreya Bhansal | 3 June 2025
                                        </span>
                                    </div>
                                    <div className={"border border-gray-200 py-2 pr-5 !mx-4"}>
                                        <div className={"flex justify-between"}>
                                            <p className={"text-[13px] font-[400] text-gray-500 p-4"}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                                                Duis aute irure dolor in reprehenderit in voluptate velit esse.
                                            </p>
                                            <Rating size={"small"} value={4}/>
                                        </div>
                                        <span className={"text-[12px] font-[400] p-4"}>
                                            Shreya Bhansal | 3 June 2025
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    </section>
}