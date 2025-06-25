import Filters from "../components/fiter-sidebar/Filters.jsx";
import ProductCard from "../components/cards/ProductCard.jsx";
import {Button, Pagination} from "@mui/material";
import {IoGrid} from "react-icons/io5";
import {FaListUl} from "react-icons/fa6";
import SortByFilter from "../components/sorting/SortByFilter.jsx";
import {useEffect, useState} from "react";
import ProductCardListView from "../components/cards/ProductCardListView.jsx";
import {products} from "../mock-data/products.js";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getProductsByCategory, getProductsBySubCategory} from "../redux/features/products/productThunk.js";
import {clearFilters} from "../redux/features/products/productSlice.js";

export default function Products() {
    const {category, subCategory} = useParams();
    const dispatch = useDispatch();
    const {products: {originalList, filteredList, totalPages, totalCount}, filters: {filterBy}} = useSelector(state => state.products);
    const [itemView, setItemView] = useState("grid");
    const [page, setPage] = useState(1);

    useEffect(()=>{
        dispatch(clearFilters());
        setPage(1);
    },[category])

    useEffect(() => {
        if(subCategory){
            dispatch(getProductsBySubCategory({category, subCategory}));
        }else{
            dispatch(getProductsByCategory({category, page, filters: filterBy}));
        }
    }, [subCategory, page, filterBy]);


    return <div className={"pages"}>
        <section className={"bg-white w-full py-5 pt-10"}>
            <div className={"container flex gap-3"}>
                <div className={"filterWrapper w-[20%] h-full"}>
                    <Filters/>
                </div>
                <div className={"productsWrapper w-[80%] h-full "}>
                    <div className={"bg-orange-50 p-2 rounded-sm !mb-3 flex items-center justify-between"}>
                        <div className={"flex items-center"}>
                            <Button onClick={() => setItemView("grid")}
                                    className={"!w-[30px] !h-[30px] !min-w-[30px] !text-gray-500"}>
                                <IoGrid/>
                            </Button>
                            <Button onClick={() => setItemView("list")}
                                    className={"!w-[30px] !h-[30px] !min-w-[30px] !text-gray-500"}>
                                <FaListUl/>
                            </Button>
                            <p className={"text-[13px] font-[500] text-primary px-3"}>There are {totalCount} products.</p>
                        </div>
                        <div className={"flex items-center"}>
                            <p className={"text-[13px] font-[500] text-primary px-3"}>Sort By: </p>
                            <SortByFilter/>
                        </div>
                    </div>
                    <div className={`grid ${itemView === "grid" ? "grid-cols-4 md:grid-cols-4" : "grid-cols-1 md:grid-cols-1"} gap-4`}>
                        {itemView === "grid" ? (filteredList || originalList)?.map(product=><ProductCard key={product.id} product={product}/>):
                            products?.map(product=><ProductCardListView key={product.id} product={product}/>)
                        }
                    </div>
                    <div className={"flex items-center justify-center py-5 !mt-5"}>
                        <Pagination page={page} onChange={(e, value)=>setPage(value)} count={totalPages || 1} size={"small"} variant={"text"}/>
                    </div>

                </div>
            </div>
        </section>

    </div>
}