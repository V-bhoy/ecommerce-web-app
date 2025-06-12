import {Swiper, SwiperSlide} from "swiper/react";
import BlogCard from "./BlogCard.jsx";
import {Navigation} from "swiper/modules"
import "swiper/css";
import "swiper/css/navigation";

export default function BlogsSlider(){
    return <div className={"py-5"}>
        <Swiper className={"blogsSlider"} slidesPerView={2} navigation={true} modules={[Navigation]} spaceBetween={20}>
            <SwiperSlide>
                <BlogCard/>
            </SwiperSlide>
            <SwiperSlide>
                <BlogCard/>
            </SwiperSlide>
            <SwiperSlide>
                <BlogCard/>
            </SwiperSlide>
            <SwiperSlide>
                <BlogCard/>
            </SwiperSlide>
        </Swiper>
    </div>
}