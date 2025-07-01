import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import {Link} from "react-router-dom";

export default function BannerSlider({itemsPerView}) {
    return <div className={"py-4"}>
        <div className={"container"}>
            <Swiper breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: itemsPerView }}} spaceBetween={15} slidesPerView={itemsPerView} navigation={true} modules={[Navigation]}
                    className={"bannerSlider"}>
                <SwiperSlide className={"overflow-hidden  rounded-[20px]"}>
                    <Link to={"/"}>
                        <img className={"w-full h-[25vh] object-cover rounded-[20px] transition"}
                             src={"https://cdn.pixabay.com/photo/2020/02/04/10/50/bag-4817887_1280.jpg"}
                             alt={"banner-image-1"}
                        />
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={"overflow-hidden  rounded-[20px]"}>
                    <Link to={"/"}>
                        <img className={"w-full h-[25vh] object-cover rounded-[20px] transition"}
                             src={"https://cdn.pixabay.com/photo/2014/05/30/05/01/jackets-357898_1280.jpg"}
                             alt={"banner-image-2"}
                        />
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={"overflow-hidden  rounded-[20px]"}>
                    <Link to={"/"}>
                        <img className={"w-full h-[25vh] object-cover rounded-[20px] transition"}
                             src={"https://cdn.pixabay.com/photo/2019/02/10/15/09/clothes-3987460_1280.jpg"}
                             alt={"banner-image-3"}
                        />
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={"overflow-hidden  rounded-[20px]"}>
                    <Link to={"/"}>
                        <img
                            className={"w-full h-[25vh] object-cover rounded-[20px] transition"}
                            src={"https://cdn.pixabay.com/photo/2016/11/22/21/57/apparel-1850804_1280.jpg"}
                            alt={"banner-image-4"}
                        />
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={"overflow-hidden  rounded-[20px]"}>
                    <Link to={"/"}>
                        <img
                            className={"w-full h-[25vh] object-cover rounded-[20px] transition"}
                            src={"https://cdn.pixabay.com/photo/2021/12/07/14/27/watch-6853385_1280.jpg"}
                            alt={"banner-image-4"}
                        />
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
}