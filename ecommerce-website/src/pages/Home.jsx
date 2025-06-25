import Slider from "../components/carousel/Slider.jsx";
import CategorySlider from "../components/carousel/CategorySlider.jsx";
import {FaShippingFast} from "react-icons/fa";
import {Tab, Tabs} from "@mui/material";
import ProductSlider from "../components/carousel/ProductSlider.jsx";
import BannerSlider from "../components/carousel/BannerSlider.jsx";
import BlogsSlider from "../components/carousel/BlogsSlider.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getAllPopularProducts, getHomePageProducts} from "../redux/features/products/productThunk.js";
import Shimmer from "../components/loading-skeleton/Shimmer.jsx";
import CardsCarouselShimmer from "../components/loading-skeleton/CardsCarouselShimmer.jsx";

export default function Home(){
    const {products: {homepage: {popular, latest, featured}}, categories, isLoading} = useSelector(state=>state.products);
    const [activeTab, setActiveTab] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHomePageProducts());
    }, []);

    useEffect(()=>{
       if(categories){
           setActiveTab(categories?.[0].id)
       }
    },[categories])

    useEffect(() => {
        if(activeTab){
            dispatch(getAllPopularProducts(activeTab));
        }
    }, [activeTab]);

    return <div className={"pages"}>
        <Slider/>
        <CategorySlider/>
        <section className={"py-8 bg-white"}>
            <div className={"container"}>
                {!activeTab ? <Shimmer/> : <><div className={" flex items-center justify-between"}>
                   <div className={"leftSection"}>
                      <h3 className={"text-[15px] font-[500]"}>Popular Products</h3>
                       <p className={"text-[13px] text-gray-500"}>Do not miss the current offers until the end of {new Date().toLocaleString('default', { month: 'long' })}!</p>
                   </div>
                    <div className={"rightSection w-[50%] flex justify-center"}>
                        <Tabs value={activeTab} onChange={(e, value)=>setActiveTab(value)} variant={"scrollable"} scrollButtons={"auto"}>
                            {categories?.map((category)=><Tab className={"tab"} key={category.id} label={category.name} value={category.id}/>)}
                        </Tabs>
                    </div>
                </div>
                {isLoading ?  <CardsCarouselShimmer/> : <ProductSlider products={popular}/>}
                </>}
            </div>
        </section>
        <section className={"py-10 !my-5 bg-white"}>
            <div className={"container"}>
                <div className={"freeShipping w-full p-4 border-2 border-primary rounded-[10px] flex items-center justify-between"}>
                    <div className={"col-first flex items-center gap-5 pl-5"}>
                        <FaShippingFast size={"2.5rem"}/>
                        <span className={"text-[1.2rem] uppercase font-[500]"}>Fast Shipping</span>
                    </div>
                    <div className={"col-second text-[15px] font-[500]"}>
                        <p>Free Delivery on your first order upto 2000/- INR</p>
                    </div>
                    <p className={"text-[1.3rem] font-[500]"}>- Only @2000/-</p>
                </div>
                <BannerSlider itemsPerView={4}/>
            </div>
        </section>
        <section className={"bg-white py-5 !mb-5"}>
            <div className={"container"}>
                <h3 className={"text-[15px] font-[500] pl-5"}>Latest Products</h3>
                <p className={"text-[13px] text-gray-500 pl-5"}>Try new trends to add to your look!</p>
                {isLoading ? <CardsCarouselShimmer/> :<ProductSlider products={latest}/>}
            </div>
        </section>
        <section className={"py-5 !mb-5"}>
            <div className={"container"}>
                <h3 className={"text-[24px] font-[700] text-primary text-center"}>Deals Of The Day</h3>
                <BannerSlider itemsPerView={3}/>
            </div>
        </section>
        <section className={"bg-white py-5 !mb-5"}>
            <div className={"container"}>
                <h3 className={"text-[15px] font-[500] pl-5"}>Featured Products</h3>
                <p className={"text-[13px] text-gray-500 pl-5"}>Pick what most trendy from your favourite brands!</p>
                {isLoading ? <CardsCarouselShimmer/> : <ProductSlider products={featured}/>}
            </div>
        </section>
        <section className={" py-5 "}>
            <div className={"container"}>
                <h3 className={"text-[15px] font-[500] pl-5"}>From the Blog</h3>
                <p className={"text-[13px] text-gray-500 pl-5"}>Know more about the products!</p>
                <BlogsSlider/>
            </div>
        </section>
    </div>
}