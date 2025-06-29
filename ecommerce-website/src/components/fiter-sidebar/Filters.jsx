import CategoryFilter from "./CategoryFilter.jsx";
import AvailabilityFilter from "./AvailabilityFilter.jsx";
import SizeFilter from "./SizeFilter.jsx";
import PriceFilter from "./PriceFilter.jsx";
import "./filters.css"
import RatingFilter from "./RatingFilter.jsx";
import {useDispatch} from "react-redux";
import {clearFilters} from "../../redux/features/products/productSlice.js";
import {useParams} from "react-router-dom";
import {getIdByCategoryAndSubCategory} from "../../redux/features/products/productThunk.js";


export default function Filters(){
    const {category, subCategory} = useParams();
    const dispatch = useDispatch();

    const clearAppliedFilters = async()=>{
        if(subCategory){
            const response = await dispatch(getIdByCategoryAndSubCategory({category, subCategory}));
            if(getIdByCategoryAndSubCategory.fulfilled.match(response)){
                dispatch(clearFilters({subCategoryIds: [response.payload.subCategoryId]}));
            }
        }else {
            dispatch(clearFilters());
        }
    }

  return <aside className={"filters"}>
      <div className={"flex items-center justify-end text-sm px-5"}>
          <p onClick={clearAppliedFilters} className={"cursor-pointer text-red-600 bg-red-100 px-3 py-1 rounded-sm hover:underline"}>Clear Filters</p>
      </div>
      {category && <CategoryFilter/>}
      <AvailabilityFilter/>
      {category === "accessories" ? null : <SizeFilter/>}
      <PriceFilter/>
      <RatingFilter/>
  </aside>
}