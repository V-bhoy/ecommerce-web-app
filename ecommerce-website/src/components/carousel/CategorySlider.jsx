import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import {Link} from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import Card from "../cards/Card.jsx";
import {trendyCategories} from "../../constants/trendy-categories.js";


export default function CategorySlider(){
    return <div className={"py-4"}>
        <div className={"container"}>
            <Swiper breakpoints={{
                // when window width is >= 768px and <= 1023px (tablet)
                768: {
                    slidesPerView: 4,
                },
                1024: {
                    slidesPerView: 6, // back to default for desktop
                },
            }} navigation={true} spaceBetween={20} slidesPerView={6} modules={[Navigation]} className={"categorySlider !py-2"}>
                {
                  trendyCategories?.map((category)=>
                      <SwiperSlide key={category.id}>
                          <Link to={category.url}><Card category={category}/></Link>
                      </SwiperSlide>)
                }
            </Swiper>
        </div>
    </div>
}