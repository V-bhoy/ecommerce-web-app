import ReviewSlider from "./ReviewSlider.jsx";
import Review from "./Review.jsx";
import ReviewForm from "./ReviewForm.jsx";
import {addProductReview} from "../../redux/features/products/productThunk.js";
import {notifyErrorToast, notifySuccessToast} from "../toasts/toasts.js";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";


export default function ReviewTab({productId, reviews, stats, refetch}){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isLoggedIn} = useSelector(state=>state.auth);

    const handleReview = async(data)=>{
        if(!isLoggedIn){
            navigate("/login");
            return;
        }
        const response = await dispatch(addProductReview(data));
        if(addProductReview.fulfilled.match(response)){
            notifySuccessToast("Added review successfully!")
            refetch(productId);
        }
        if(addProductReview.rejected.match(response)){
            notifyErrorToast(response.error?.message || "Failed to add product review!");
        }
    }

    return <div className={"py-2"}>
        <div className={"flex gap-4"}>
            {reviews?.length > 0 && <div className={"flex-1"}>
                <p className={"text-[14px] font-[500] px-4 !mb-2"}>What customers said</p>
                <div className={"flex flex-col gap-4"}>
                    {stats.map((productSuggestion, index) =>
                        <ReviewSlider key={index} title={productSuggestion.title}
                                      value={productSuggestion.value}
                                      vote={productSuggestion.vote}
                    />)}
                </div>
                <div>
                    <p className={"text-[14px] font-[500] px-4 !my-2"}>Customer Reviews ({reviews.length})</p>
                    <div
                        className={"flex flex-col gap-4 h-[25vh] overflow-scroll p-2 py-4 border border-gray-300 overflow-hidden !mx-3"}>
                        {reviews.map((review) => <Review key={review.id} review={review}/>)}
                    </div>
                </div>
            </div>}
            <div className={"flex-1 py-2"}>
                <p className={"text-[14px] font-[500] px-4 !mb-2"}>Add Your Review</p>
                <ReviewForm handleReview={handleReview} productId={productId}/>
            </div>
        </div>
    </div>
}