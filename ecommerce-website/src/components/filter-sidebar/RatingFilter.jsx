import {Rating} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setFilters} from "../../redux/features/products/productSlice.js";

export default function RatingFilter(){
    const dispatch = useDispatch();
    const {filters: {filterBy}} = useSelector((state)=>state.products);

    const handleChange = (e,value)=>{
        dispatch(setFilters({filterBy: {rating: value}}));
    }

    return <div className={"rating-filter border-t border-t-gray-200 px-5 py-3"}>
        <h3 className={"text-[14px] font-[500] "}>Rating</h3>
        <div className={"py-3"}>
            <Rating value={filterBy?.rating || 0} onChange={handleChange} size={"small"}/>
        </div>
    </div>
}