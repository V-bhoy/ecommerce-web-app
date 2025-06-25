import CategoryFilter from "./CategoryFilter.jsx";
import AvailabilityFilter from "./AvailabilityFilter.jsx";
import SizeFilter from "./SizeFilter.jsx";
import PriceFilter from "./PriceFilter.jsx";
import "./filters.css"
import RatingFilter from "./RatingFilter.jsx";
import {useDispatch} from "react-redux";
import {clearFilters} from "../../redux/features/products/productSlice.js";
import {useParams} from "react-router-dom";


export default function Filters(){
    const {category} = useParams();
    const dispatch = useDispatch();

  return <aside className={"filters"}>
      <div className={"flex items-center justify-end text-sm px-5"}>
          <p onClick={()=>dispatch(clearFilters())} className={"cursor-pointer text-red-600 bg-red-100 px-3 py-1 rounded-sm hover:underline"}>Clear Filters</p>
      </div>
      <CategoryFilter/>
      <AvailabilityFilter/>
      {category === "accessories" ? null : <SizeFilter/>}
      <PriceFilter/>
      <RatingFilter/>
  </aside>
}