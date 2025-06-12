import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import {Link} from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import Card from "./Card.jsx";


export default function CategorySlider(){
    return <div className={"py-2"}>
        <div className={"container"}>
            <Swiper navigation={true} spaceBetween={20} slidesPerView={6} modules={[Navigation]} className={"categorySlider !py-2"}>
                {
                    new Array(10).fill(0).map((_, index)=>
                        <SwiperSlide key={index}>
                       <Link to={"/"}><Card/></Link>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    </div>
}