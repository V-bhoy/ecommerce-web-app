import {useEffect, useState} from "react";
import ProductDetailsTab from "../components/product-details/ProductDetailsTab.jsx";
import ProductSlider from "../components/carousel/ProductSlider.jsx";
import ProductDetailsSection from "../components/product-details/ProductDetailsSection.jsx";
import {useDispatch, useSelector} from "react-redux";
import { useParams} from "react-router-dom";
import Shimmer from "../components/loading-skeleton/Shimmer.jsx";
import ProductDetailsShimmer from "../components/loading-skeleton/ProductDetailsShimmer.jsx";
import {getProductDetailsById, getProductReviews, getReviewStats} from "../redux/features/products/productThunk.js";
import ReviewTab from "../components/review/ReviewTab.jsx";


export default function ProductDetails() {
    const dispatch = useDispatch();
    const {id} = useParams();
    const [activeTab, setActiveTab] = useState(0);
    const [reviews, setReviews] = useState([]);
    const [stats, setStats] = useState([]);

    const {isLoading, productDetails: {details, similarProducts, alsoLikedProducts}} = useSelector(state => state.products);

    const refetch = (id)=>dispatch(getProductDetailsById(id));

    const handleReviewsAndStats = async(productId)=>{
        const [reviewsResult, statsResult] = await Promise.all(
            [dispatch(getProductReviews(productId)), dispatch(getReviewStats(productId))]);
        if(getProductReviews.fulfilled.match(reviewsResult)){
            setReviews(reviewsResult.payload.reviews);
        }
        if(getReviewStats.fulfilled.match(statsResult)){
            const {maxFitVote, maxLengthVote, maxTransparencyVote} = statsResult.payload;
            setStats([maxFitVote, maxLengthVote, maxTransparencyVote]);
        }
    }

    const refetchReviews = async(productId)=>{
        const reviewsResult = await dispatch(getProductReviews(productId));
        if(getProductReviews.fulfilled.match(reviewsResult)){
            setReviews(reviewsResult.payload.reviews);
        }
    }


    useEffect(() => {
        if(id){
            dispatch(getProductDetailsById(id));
            handleReviewsAndStats(id);
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
                        activeTab === 2 && <ReviewTab productId={details.id} reviews={reviews} stats={stats} refetch={refetchReviews}/>
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
                <p className={"text-[13px] text-gray-500 pl-5"}>Look at what most people bought along with this
                    product!</p>
                <ProductSlider products={alsoLikedProducts}/>
            </div>
        </>
        }
    </section>
}