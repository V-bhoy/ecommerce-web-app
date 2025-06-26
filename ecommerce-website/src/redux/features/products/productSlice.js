import {createSlice} from "@reduxjs/toolkit";
import {
    getAllCategoriesAndSubCategories,
    getAllPopularProducts,
    getHomePageProducts, getIdByCategoryAndSubCategory, getProductDetailsById,
    getProductsByCategory,
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
    productDetails: {
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
                ...action.payload.filterBy
            }
            state.filters.sortBy = {
                ...action.payload.sortBy
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
            if(filterName === "sortBy"){
                state.filters.sortBy = null;
            }
        },
        clearFilters: (state, action)=>{
           state.filters = {
               search: null,
               sortBy: null,
               filterBy: action.payload || null // this is to keep the selected subcategory, on clear filter when linked to subcategory url
           }
        }
    },
    extraReducers: (builder)=>{
        // get homepage products
        builder.addCase(getHomePageProducts.pending, loadProductState);
        builder.addCase(getHomePageProducts.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.products.homepage = {
                    ...state.products.homepage,
                    latest: action.payload?.data?.latestProducts,
                    featured: action.payload?.data?.featuredProducts
            };
        });
        builder.addCase(getHomePageProducts.rejected, setProductsError);

        // get categories and sub categories for navigation
        builder.addCase(getAllCategoriesAndSubCategories.pending, loadProductState);
        builder.addCase(getAllCategoriesAndSubCategories.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.active = action.payload.categories?.categories?.[0].id;
            state.categories = action.payload.categories?.categories;
            state.subCategories = action.payload.subCategories?.subCategories;
        });
        builder.addCase(getAllCategoriesAndSubCategories.rejected, setProductsError);

        // get popular products on homepage
        builder.addCase(getAllPopularProducts.pending, loadProductState);
        builder.addCase(getAllPopularProducts.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.products.homepage = {
                    ...state.products.homepage,
                    popular: action.payload?.data
            }
        })
        builder.addCase(getAllPopularProducts.rejected, setProductsError);

        // get products list
        builder.addCase(getProductsByCategory.pending, loadProductState);
        builder.addCase(getProductsByCategory.fulfilled,(state, action)=>{
            state.isLoading = false;
            const hasFilters = action.meta.arg?.filters && Object.keys(action.meta.arg.filters).length > 0;
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

        // get id from parameters of category and sub category
        builder.addCase(getIdByCategoryAndSubCategory.pending, loadProductState);
        builder.addCase(getIdByCategoryAndSubCategory.fulfilled,(state)=>{
            state.isLoading = false;
        })
        builder.addCase(getIdByCategoryAndSubCategory.rejected, setProductsError);

        // get product details
        builder.addCase(getProductDetailsById.pending, loadProductState);
        builder.addCase(getProductDetailsById.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.productDetails.details = action.payload.productDetails;
            state.productDetails.similarProducts = action.payload.similarProducts;
            state.productDetails.alsoLikedProducts = action.payload.complementaryProducts;
        })
        builder.addCase(getProductDetailsById.rejected, setProductsError);
    }
})

export const {setFilters, removeFilters, clearFilters} = productSlice.actions;
export default productSlice.reducer;