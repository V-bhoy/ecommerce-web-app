import Filters from "../components/fiter-sidebar/Filters.jsx";
import ProductCard from "../components/cards/ProductCard.jsx";
import {Button, Pagination} from "@mui/material";
import {IoGrid} from "react-icons/io5";
import {FaListUl} from "react-icons/fa6";
import SortByFilter from "../components/sorting/SortByFilter.jsx";
import {useEffect, useState} from "react";
import ProductCardListView from "../components/cards/ProductCardListView.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getIdByCategoryAndSubCategory, getProductsByCategory} from "../redux/features/products/productThunk.js";
import {clearFilters} from "../redux/features/products/productSlice.js";
import ProductListShimmer from "../components/loading-skeleton/ProductListShimmer.jsx";

export default function Products() {
    const dispatch = useDispatch();
    const {category, subCategory} = useParams();
    const [itemView, setItemView] = useState("grid");
    const [page, setPage] = useState(1);

    const {isLoading, products: {originalList, filteredList, totalPages, totalCount}, filters: {sortBy, filterBy}} = useSelector(state => state.products);

    useEffect(()=>{
        setPage(1);
        if(subCategory){
            handleSubCategoryUrl();
        }else{
            if(!filterBy && !sortBy){
                dispatch(getProductsByCategory({category, page, filters: {...filterBy, sortBy} }));
            }else{
                dispatch(clearFilters());
            }
        }
    },[category, subCategory])

    useEffect(() => {
        dispatch(getProductsByCategory({category, page, filters: {...filterBy, sortBy} }));
    }, [page, filterBy, sortBy]);

    const handleSubCategoryUrl = async()=>{
        let subCategoryId;
        const response = await dispatch(getIdByCategoryAndSubCategory({category, subCategory}));
        if(getIdByCategoryAndSubCategory.fulfilled.match(response)){
            subCategoryId = response.payload.subCategoryId;
            dispatch(clearFilters({subCategoryIds: [subCategoryId]}));
        }
    }

    const productsToRender = filteredList || originalList;


    return <div className={"pages"}>
        <section className={"bg-white w-full py-5 pt-10"}>
            { isLoading ? <ProductListShimmer/> :
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
                        {itemView === "grid" ? productsToRender?.map(product=><ProductCard key={product.id} product={product}/>):
                            productsToRender?.map(product=><ProductCardListView key={product.id} product={product}/>)
                        }
                    </div>
                    <div className={"flex items-center justify-center py-5 !mt-5"}>
                        <Pagination page={page} onChange={(e, value)=>setPage(value)} count={totalPages || 1} size={"small"} variant={"text"}/>
                    </div>
                </div>
            </div>}
        </section>

    </div>
}