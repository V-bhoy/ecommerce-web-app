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

export const getProductsBySubCategory = createAsyncThunk("subCategoryProducts", async({category, subCategory})=>{
    const response = await axiosInstance.get(`products/${category}/${subCategory}/all`);
    return response.data;
})