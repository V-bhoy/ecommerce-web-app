import {useEffect, useState} from "react";
import {reviews} from "../mock-data/reviews.js";
import Review from "../components/review/Review.jsx";
import ReviewSlider from "../components/review/ReviewSlider.jsx";
import ProductDetailsTab from "../components/product-details/ProductDetailsTab.jsx";
import ReviewForm from "../components/review/ReviewForm.jsx";
import ProductSlider from "../components/carousel/ProductSlider.jsx";
import ProductDetailsSection from "../components/product-details/ProductDetailsSection.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import Shimmer from "../components/loading-skeleton/Shimmer.jsx";
import ProductDetailsShimmer from "../components/loading-skeleton/ProductDetailsShimmer.jsx";
import {getProductDetailsById} from "../redux/features/products/productThunk.js";


export default function ProductDetails() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState(0);

    const {isLoading, productDetails: {details, similarProducts, alsoLikedProducts}} = useSelector(state => state.products);
    const refetch = (id)=>dispatch(getProductDetailsById(id));


    useEffect(() => {
        if(id){
            dispatch(getProductDetailsById(id));
        }
    }, [id]);

    return <section>
        {isLoading ? <ProductDetailsShimmer/> : <ProductDetailsSection details={details} refetch={refetch}/>}
        {isLoading ? <div className={"container"}><Shimmer/><Shimmer/></div> : <>
            <div className={"container product-info !mb-5"}>
                <div className={"flex items-center gap-4 text-[14px] font-[500] p-3"}>
                    <span onClick={() => setActiveTab(0)}
                          className={`link cursor-pointer ${activeTab === 0 ? "text-primary" : ""}`}>Description</span>
                    <span onClick={() => setActiveTab(1)}
                          className={`link cursor-pointer ${activeTab === 1 ? "text-primary" : ""}`}>Product Details</span>
                    <span onClick={() => setActiveTab(2)}
                          className={`link cursor-pointer ${activeTab === 2 ? "text-primary" : ""}`}>Reviews</span>
                </div>
                <div className={"border border-gray-200 w-full p-2"}>
                    {activeTab === 0 && <p className={"text-[14px] font-[400] text-gray-500 p-4"}>
                        {details?.description}
                    </p>
                    }
                    {
                        activeTab === 1 && <ProductDetailsTab productDetails={details}/>
                    }
                    {
                        activeTab === 2 && <div className={"py-2"}>
                            <div className={"flex gap-4"}>
                                <div className={"flex-1"}>
                                    <p className={"text-[14px] font-[500] px-4 !mb-2"}>What customers said</p>
                                    <div className={"flex flex-col gap-4"}>
                                        {[{id: 1, title: "Fit", value: 80}, {id: 2, title: "Length", value: 70}, {
                                            id: 3,
                                            title: "Transparency",
                                            value: 80
                                        }]
                                            .map((productSuggestion) => <ReviewSlider key={productSuggestion.id}
                                                                                      title={productSuggestion.title}
                                                                                      value={productSuggestion.value}/>)}
                                    </div>
                                    <div>
                                        <p className={"text-[14px] font-[500] px-4 !my-2"}>Customer Reviews (5)</p>
                                        <div
                                            className={"flex flex-col gap-4 h-[25vh] overflow-scroll p-2 py-4 border border-gray-300 overflow-hidden !mx-3"}>
                                            {reviews.map((review) => <Review key={review.id} review={review}/>)}
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
                <h3 className={"text-[15px] font-[500] pl-5"}>Similar Products</h3>
                <p className={"text-[13px] text-gray-500 pl-5"}>Want more choices, have a look!</p>
                <ProductSlider products={similarProducts}/>
            </div>
            <div className={"container py-3"}>
                <h3 className={"text-[15px] font-[500] pl-5"}>You Might Also Like</h3>
                <p className={"text-[13px] text-gray-500 pl-5"}>Look at what most people bought aong with this
                    product!</p>
                <ProductSlider products={alsoLikedProducts}/>
            </div>
        </>
        }
    </section>
}