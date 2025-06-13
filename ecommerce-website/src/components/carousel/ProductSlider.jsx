import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper/modules";
import ProductCard from "../cards/ProductCard.jsx";

export default function ProductSlider(){
    return <div className={"py-5"}>
      <Swiper slidesPerView={5} navigation={true} spaceBetween={10} modules={[Navigation]} className={"productSlider"}>
          <SwiperSlide>
              <ProductCard/>
          </SwiperSlide>
          <SwiperSlide>
              <ProductCard/>
          </SwiperSlide>
          <SwiperSlide>
              <ProductCard/>
          </SwiperSlide>

          <SwiperSlide>
              <ProductCard/>
          </SwiperSlide>

          <SwiperSlide>
              <ProductCard/>
          </SwiperSlide>

          <SwiperSlide>
              <ProductCard/>
          </SwiperSlide>

          <SwiperSlide>
              <ProductCard/>
          </SwiperSlide>

      </Swiper>
    </div>
}