import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import "swiper/css"
import 'swiper/css/navigation';
import {banners} from "../../constants/mega-banners.js";
import MegaBanner from "./MegaBanner.jsx";


export default function Slider() {
    return <div className={"homeSlider pt-4"}>
        <div className={"container"}>
            <Swiper loop autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }} spaceBetween={15} navigation={true} modules={[Navigation, Autoplay]} className={"slider"}>
                {banners?.map(banner=>
                    <SwiperSlide key={banner.id}>
                        <MegaBanner banner={banner}/>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    </div>

}