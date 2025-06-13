import CategoryFilter from "./CategoryFilter.jsx";
import AvailabilityFilter from "./AvailabilityFilter.jsx";
import SizeFilter from "./SizeFilter.jsx";
import PriceFilter from "./PriceFilter.jsx";
import "./filters.css"
import RatingFilter from "./RatingFilter.jsx";


export default function Filters(){

  return <aside className={"filters"}>
      <CategoryFilter/>
      <AvailabilityFilter/>
      <SizeFilter/>
      <PriceFilter/>
      <RatingFilter/>
  </aside>
}