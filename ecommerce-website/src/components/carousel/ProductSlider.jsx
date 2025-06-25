import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper/modules";
import ProductCard from "../cards/ProductCard.jsx";

export default function ProductSlider({products}){
    return <div className={"py-5"}>
      <Swiper slidesPerView={5} navigation={true} spaceBetween={10} modules={[Navigation]} className={"productSlider"}>
          {products?.map((product)=><SwiperSlide key={product.id}>
              <ProductCard product={product}/>
          </SwiperSlide>)}
      </Swiper>
    </div>
}