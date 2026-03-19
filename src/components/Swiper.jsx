import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Shoe1 from "../assets/images/shoe1.png";
import Shoe2 from "../assets/images/shoe2.png";
import Shoe3 from "../assets/images/shoe3.png";
import Shoe4 from "../assets/images/shoe4.png";

const images = [Shoe1, Shoe2, Shoe3, Shoe4];

export default function MobileSwiper(props) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={`relative ${props.className || ""}`}>
      <Swiper
        modules={[Navigation]}
        loop={true}
        slidesPerView={1}
        spaceBetween={20}
        navigation={false}
        onSwiper={(swiper) => {
          setTimeout(() => {
            if (!swiper || swiper.destroyed) return;

            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;

            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        className="rounded-[16px] overflow-hidden gg:rounded-[0px]"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`shoe-${index + 1}`}
              className="w-full h-[420px] object-cover rounded-[16px] gg:rounded-[0px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        ref={prevRef}
        type="button"
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center text-3xl font-bold shadow-md cursor-pointer pb-1.5"
      >
        &#8249;
      </button>

      <button
        ref={nextRef}
        type="button"
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center text-3xl font-bold shadow-md cursor-pointer pb-1.5"
      >
        &#8250;
      </button>
    </div>
  );
}
