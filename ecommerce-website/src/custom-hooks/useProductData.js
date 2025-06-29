import {useDispatch, useSelector} from "react-redux";
import {
    getAllProducts,
    getIdByCategoryAndSubCategory,
    getProductsByCategory
} from "../redux/features/products/productThunk.js";
import {useEffect, useRef, useState} from "react";
import {clearFilters} from "../redux/features/products/productSlice.js";

export default function useProductData({category, subCategory, pathname}) {
    const dispatch = useDispatch();
    const {isLoading, products: {originalList, filteredList, totalCount, totalPages}, filters: {filterBy, sortBy, search}} = useSelector(state => state.products);
    const [page, setPage] = useState(1);
    const isWishlistPage =  pathname?.includes("/wishlist");
    const allProductsPage = (!category && !subCategory);
    const prevCategory = useRef();

    const fetchProductsByCategory = ()=> dispatch(getProductsByCategory({category, page, filters: {
            ...filterBy,
            sortBy,
            search
        }}))

    const fetchProducts = ()=>dispatch(getAllProducts({page, filters: {
            ...filterBy,
            sortBy,
            search
        }, wishlist: isWishlistPage}))

    const handleSubCategoryUrl = async()=>{
        let subCategoryId;
        const response = await dispatch(getIdByCategoryAndSubCategory({category, subCategory}));
        if(getIdByCategoryAndSubCategory.fulfilled.match(response)){
            subCategoryId = response.payload.subCategoryId;
            dispatch(clearFilters({subCategoryIds: [subCategoryId]}));
        }
    }

    useEffect(() => {
        if(!subCategory){
            dispatch(clearFilters());
        }
    }, []);


    useEffect(() => {
        setPage(1);
        if(subCategory){
            handleSubCategoryUrl();
        }
        if(prevCategory.current && prevCategory.current !== category) {
           dispatch(clearFilters());
        }
        prevCategory.current = category;
    }, [category, subCategory]);

    useEffect(()=>{
        setPage(1);
    },[filterBy, sortBy, search])

    useEffect(()=>{
        if(allProductsPage){
            fetchProducts()
        }else {
            fetchProductsByCategory();
        }
    }, [page, filterBy, sortBy, search]);


    return {
        isLoading,
        refetch: allProductsPage ? fetchProducts : fetchProductsByCategory,
        productsToRender: filteredList || originalList,
        page,
        setPage,
        totalCount,
        totalPages
    }
}