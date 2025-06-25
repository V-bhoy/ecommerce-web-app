import {createSlice} from "@reduxjs/toolkit";
import {
    getAllCategoriesAndSubCategories,
    getAllPopularProducts,
    getHomePageProducts,
    getProductsByCategory, getProductsBySubCategory
} from "./productThunk.js";

const initialState = {
    isLoading: false,
    error: null,
    products: {
        originalList: null,
        filteredList: null,
        homepage: {
            popular: null,
            featured: null,
            latest: null
        },
        totalPages: null,
        totalCount: null
    },
    productDetail: {
        details: null,
        similarProducts: null,
        alsoLikedProducts: null
    },
    filters: {
        search: null,
        sortBy: null,
        filterBy: null
    },
    categories: null,
    subCategories: null
}

const loadProductState = (state)=>{
    state.isLoading = true;
    state.error = null;
}

const setProductsError = (state, action)=>{
    state.isLoading = false;
    state.error = action.payload?.message || action.error?.message || "Request failed!";
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setFilters: (state, action)=>{
            state.filters.filterBy = {
                ...state.filters.filterBy,
                ...action.payload
            }
        },
        removeFilters: (state, action)=>{
            const {filterName, data} = action.payload;
            let categoryIds = state.filters.filterBy?.subCategoryIds;
            let sizes = state.filters.filterBy?.sizes;
            if(categoryIds && filterName === "subCategoryIds"){
                state.filters.filterBy.subCategoryIds = categoryIds.filter((item)=>item!==data);
            }
            if(sizes && filterName==="sizes"){
                state.filters.filterBy.sizes = sizes.filter((item)=>item!==data);
            }
        },
        clearFilters: (state)=>{
           state.filters = {
               search: null,
               sortBy: null,
               filterBy: null
           }
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(getHomePageProducts.pending, loadProductState);
        builder.addCase(getHomePageProducts.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.products.homepage = {
                    ...state.products.homepage,
                    latest: action.payload?.data?.latestProducts,
                    featured: action.payload?.data?.featuredProducts
            };
        })
        builder.addCase(getHomePageProducts.rejected, setProductsError);
        builder.addCase(getAllCategoriesAndSubCategories.pending, loadProductState);
        builder.addCase(getAllCategoriesAndSubCategories.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.active = action.payload.categories?.categories?.[0].id;
            state.categories = action.payload.categories?.categories;
            state.subCategories = action.payload.subCategories?.subCategories;
        });
        builder.addCase(getAllCategoriesAndSubCategories.rejected, setProductsError);
        builder.addCase(getAllPopularProducts.pending, loadProductState);
        builder.addCase(getAllPopularProducts.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.products.homepage = {
                    ...state.products.homepage,
                    popular: action.payload?.data
            }
        })
        builder.addCase(getAllPopularProducts.rejected, setProductsError);
        builder.addCase(getProductsByCategory.pending, loadProductState);
        builder.addCase(getProductsByCategory.fulfilled,(state, action)=>{
            state.isLoading = false;
            const hasFilters = action.meta.arg?.filters;
            const {products, totalPages, totalCount} = action.payload;
            if(hasFilters){
                state.products.filteredList = products;
            }else{
                state.products.originalList = products;
                state.products.filteredList = null;
            }
            state.products.totalCount = totalCount;
            state.products.totalPages = totalPages;
        })
        builder.addCase(getProductsByCategory.rejected, setProductsError);
        builder.addCase(getProductsBySubCategory.pending, loadProductState);
        builder.addCase(getProductsBySubCategory.fulfilled,(state, action)=>{
            state.isLoading = false;
            if(state.filters.filterBy?.subCategory){
                state.products.filteredList = action.payload?.products;
            }
            else{
                state.products.originalList = action.payload?.products;
            }
        })
        builder.addCase(getProductsBySubCategory.rejected, setProductsError);
    }
})

export const {setFilters, removeFilters, clearFilters} = productSlice.actions;
export default productSlice.reducer;