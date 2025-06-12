import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import "swiper/css"
import 'swiper/css/navigation';
import {Button} from "@mui/material";


export default function Slider() {
    return <div className={"homeSlider pt-4"}>
        <div className={"container"}>
            <Swiper loop autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }} spaceBetween={15} navigation={true} modules={[Navigation, Autoplay]} className={"slider"}>
                <SwiperSlide>
                    <div className={"w-full h-[55vh] rounded-[20px] relative overflow-hidden"}>
                        <img
                            className={"object-cover w-full h-full"}
                             src={"https://cdn.pixabay.com/photo/2017/08/05/22/04/people-2586007_1280.jpg"}
                             alt={"banner-image-1"}
                        />
                        <div className={"info z-50 absolute top-[0] -right-[100%] opacity-0 w-[50%] h-[100%] flex flex-col items-center justify-center transition-all duration-800"}>
                            <h3 className={"text-[25px] font-[600] text-white"}>Big Saving Days Sale</h3>
                            <h2 className={"text-[40px] font-[600] text-yellow-400"}>Women Apparels 20% Off</h2>
                            <h3 className={"text-[20px] font-[400] text-white"}>Starting at only<span className={"text-yellow-400 font-[600]"}>&nbsp;₹500/-</span></h3>
                            <br/>
                            <Button color={"warning"} size={"small"} variant={"contained"}>Shop Now</Button>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className={"w-full h-[55vh] rounded-[20px] relative overflow-hidden"}>
                        <img
                            className={"object-cover w-full h-full"}
                            src={"https://cdn.pixabay.com/photo/2016/11/29/07/16/balancing-1868051_1280.jpg"}
                            alt={"banner-image-1"}
                        />
                        <div className={"info-left z-50 absolute top-[0] -left-[100%] opacity-0 w-[50%] h-[100%] flex flex-col items-center justify-center transition-all duration-1000"}>
                            <h3 className={"text-[25px] font-[600]"}>Big Saving Days Sale</h3>
                            <h2 className={"text-[40px] font-[600] text-primary"}>Men Apparels upto 30% Off</h2>
                            <h3 className={"text-[20px] font-[400]"}>Starting at only<span className={"text-primary font-[600]"}>&nbsp;₹2000/-</span></h3>
                            <br/>
                            <Button color={"warning"} size={"small"} variant={"contained"}>Shop Now</Button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"w-full h-[55vh] rounded-[20px] relative overflow-hidden"}>
                        <img
                            className={"object-cover w-full h-full"}
                            src={"https://cdn.pixabay.com/photo/2017/01/18/17/14/girl-1990347_1280.jpg"}
                            alt={"banner-image-1"}
                        />
                        <div className={"info z-50 absolute top-[0] -right-[100%] opacity-0 w-[50%] h-[100%] flex flex-col items-center justify-center transition-all duration-800"}>
                            <h3 className={"text-[25px] font-[600] text-white"}>Big Saving Days Sale</h3>
                            <h2 className={"text-[40px] font-[600] text-yellow-200"}>Women Jewellery 20% Off</h2>
                            <h3 className={"text-[20px] font-[400] text-white"}>Starting at only<span className={"text-yellow-200 font-[600]"}>&nbsp;₹800/-</span></h3>
                            <br/>
                            <Button color={"warning"} size={"small"} variant={"contained"}>Shop Now</Button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"w-full h-[55vh] rounded-[20px] relative overflow-hidden"}>
                        <img
                            className={"object-cover w-full h-full"}
                            src={"https://cdn.pixabay.com/photo/2020/08/24/21/40/fashion-5515135_1280.jpg"}
                            alt={"banner-image-1"}
                        />
                        <div className={"info-left z-50 absolute top-[0] -left-[100%] opacity-0 w-[50%] h-[100%] flex flex-col items-center justify-center transition-all duration-1000"}>
                            <h3 className={"text-[25px] font-[600] text-white"}>Big Saving Days Sale</h3>
                            <h2 className={"text-[40px] font-[600] text-yellow-400"}>Footwear upto 30% Off</h2>
                            <h3 className={"text-[20px] font-[400] text-white"}>Starting at only<span className={"text-yellow-400 font-[600]"}>&nbsp;₹2000/-</span></h3>
                            <br/>
                            <Button color={"warning"} size={"small"} variant={"contained"}>Shop Now</Button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>

}