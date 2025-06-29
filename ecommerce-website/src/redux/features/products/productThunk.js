import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosInstance} from "../../../main.jsx";

export const getHomePageProducts = createAsyncThunk("homePageProducts", async()=>{
    const response = await axiosInstance.get("/products/home/all");
    return response.data;
})

export const getAllCategoriesAndSubCategories = createAsyncThunk(
    "getCategoriesAndSubCategories", async()=>{
          const [categoriesRes, subCategoriesRes] = await Promise.all([
              axiosInstance.get("/categories/all"),
              axiosInstance.get("/sub-categories/all")
          ]);
          return {
              categories: categoriesRes.data,
              subCategories: subCategoriesRes.data
          }
    }
)

export const getAllPopularProducts = createAsyncThunk("popularProducts", async(categoryId)=>{
    const response = await axiosInstance.get(`/products/popular/${categoryId}/all`);
    return response.data;
})

export const getProductsByCategory = createAsyncThunk("categoryProducts", async({category, filters, page=1, limit=12})=>{
    const response = await axiosInstance.post(`products/${category}/all?page=${page}&limit=${limit}`, filters);
    return response.data;
})

export const getAllProducts = createAsyncThunk("allProducts", async({filters, page=1, limit=12, wishlist= false})=>{
   const url = `${wishlist ? "wishlist" : "products"}/all/?page=${page}&limit=${limit}`
    const response = await axiosInstance.post(url, filters);
    return response.data;
})

export const getIdByCategoryAndSubCategory = createAsyncThunk("categoryAndSubCategoryId", async({category, subCategory})=>{
    const response = await axiosInstance.get(`products/id/?category=${category}&subCategory=${subCategory}`);
    return response.data;
})

export const getProductDetailsById = createAsyncThunk("getProductDetails", async(productId)=>{
    const response = await axiosInstance.get(`products/${productId}`);
    return response.data;
})

export const viewProductDetailsById = createAsyncThunk("viewProductDetails", async(productId)=>{
    const response = await axiosInstance.get(`products/${productId}?viewOnly=true`);
    return response.data;
})

export const getProductVariants = createAsyncThunk("getProductVariants", async(id)=>{
    const response = await axiosInstance.get(`/variants/inStock/${id}`);
    return response.data;
})

export const addWishlistProduct = createAsyncThunk("addWishlistProduct", async(productId)=>{
    const response = await axiosInstance.post(`/wishlist/add`, {productId} );
    return response.data;
})

export const removeWishlistProduct = createAsyncThunk("removeWishlistProduct", async(productId)=>{
    const response = await axiosInstance.post(`/wishlist/remove`, {productId} );
    return response.data;
})

export const addProductReview = createAsyncThunk("addReview", async(reviewData)=>{
    const response = await axiosInstance.post("/review/create", reviewData);
    return response.data;
})

export const getProductReviews = createAsyncThunk("getProductReviews", async(productId)=>{
    const response = await axiosInstance.get(`/review/all/${productId}`);
    return response.data;
})

export const getReviewStats = createAsyncThunk("reviewStats", async(productId)=>{
    const response = await axiosInstance.get(`/review/stats/${productId}`);
    return response.data;
})