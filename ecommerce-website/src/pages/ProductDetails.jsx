import MagnifyProduct from "../components/magnify-product/MagnifyProduct.jsx";
import {Button, Rating} from "@mui/material";
import {useState} from "react";
import {FaCartShopping, FaRegHeart} from "react-icons/fa6";
import {IoShareSocial} from "react-icons/io5";
import {reviews} from "../mock-data/reviews.js";
import Review from "../components/review/Review.jsx";
import ReviewSlider from "../components/review/ReviewSlider.jsx";
import ProductDetailsTab from "../components/product-details/ProductDetailsTab.jsx";
import {productDetails} from "../mock-data/products.js";
import ReviewForm from "../components/review/ReviewForm.jsx";
import ProductSlider from "../components/carousel/ProductSlider.jsx";
import ProductDetailsSection from "../components/product-details/ProductDetailsSection.jsx";

export default function ProductDetails(){
    const [activeTab, setActiveTab] = useState(0);

    return <section>
        <ProductDetailsSection/>
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
                    activeTab === 1 && <ProductDetailsTab details={productDetails}/>
                }
                {
                    activeTab===2 && <div className={"py-2"}>
                    <div className={"flex gap-4"}>
                        <div className={"flex-1"}>
                            <p className={"text-[14px] font-[500] px-4 !mb-2"}>What customers said</p>
                            <div className={"flex flex-col gap-4"}>
                                {[{id: 1, title: "Fit", value: 80}, {id: 2, title: "Length", value: 70}, {id: 3, title: "Transparency", value: 80}]
                                    .map((productSuggestion)=><ReviewSlider key={productSuggestion.id} title={productSuggestion.title} value={productSuggestion.value}/>)}
                            </div>
                            <div>
                                <p className={"text-[14px] font-[500] px-4 !my-2"}>Customer Reviews (5)</p>
                                <div className={"flex flex-col gap-4 h-[25vh] overflow-scroll p-2 py-4 border border-gray-300 overflow-hidden !mx-3"}>
                                    {reviews.map((review)=><Review key={review.id} review={review}/>)}
                                </div>
                            </div>
                        </div>
                        <div className={"flex-1 py-2"}>
                            <p className={"text-[14px] font-[500] px-4 !mb-2"}>Add Your Review</p>
                            <ReviewForm/>
                        </div>

                    </div>
                    </div>
                }
            </div>
        </div>
        <div className={"container py-3"}>
            <h3 className={"text-[15px] font-[500] pl-5"}>You Might Also Like</h3>
            <p className={"text-[13px] text-gray-500 pl-5"}>Look at what most people bought aong with this product!</p>
            <ProductSlider/>
        </div>
        <div className={"container py-3"}>
            <h3 className={"text-[15px] font-[500] pl-5"}>Similar Products</h3>
            <p className={"text-[13px] text-gray-500 pl-5"}>Want more choices, have a look!</p>
            <ProductSlider/>
        </div>
    </section>
}