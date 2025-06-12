import Slider from "../components/carousel/Slider.jsx";
import CategorySlider from "../components/carousel/CategorySlider.jsx";
import {FaShippingFast} from "react-icons/fa";
import {Tab, Tabs} from "@mui/material";
import ProductSlider from "../components/carousel/ProductSlider.jsx";
import BannerSlider from "../components/carousel/BannerSlider.jsx";
import BlogsSlider from "../components/carousel/BlogsSlider.jsx";
import Footer from "../components/footer/Footer.jsx";


export default function Home(){
    return <div className={"pages"}>
        <Slider/>
        <CategorySlider/>
        <section className={"py-8 bg-white"}>
            <div className={"container"}>
                <div className={" flex items-center justify-between"}>
                   <div className={"leftSection"}>
                      <h3 className={"text-[15px] font-[500]"}>Popular Products</h3>
                       <p className={"text-[13px] text-gray-500"}>Do not miss the current offers until the end of {new Date().toLocaleString('default', { month: 'long' })}!</p>
                   </div>
                    <div className={"rightSection w-[60%]"}>
                        <Tabs value={1} variant={"scrollable"} scrollButtons={"auto"}>
                            <Tab className={"tab"} label={"Men Wear"} value={1} />
                            <Tab className={"tab"} label={"Women Wear"} value={2}/>
                            <Tab className={"tab"} label={"Kids Wear"} value={3}/>
                            <Tab className={"tab"} label={"Foot Wear"} value={4}/>
                            <Tab className={"tab"} label={"Bags"} value={5}/>
                            <Tab className={"tab"} label={"Watches"} value={6}/>
                            <Tab className={"tab"} label={"Jewellery"} value={7}/>
                        </Tabs>
                    </div>
                </div>
                <ProductSlider/>
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
                <ProductSlider/>
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
                <ProductSlider/>
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