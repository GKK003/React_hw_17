import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "./ProductGallery.css";
import Shoe1 from "../assets/images/shoe1.png";
import Shoe2 from "../assets/images/shoe2.png";
import Shoe3 from "../assets/images/shoe3.png";
import Shoe4 from "../assets/images/shoe4.png";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const images = [Shoe4, Shoe3, Shoe2, Shoe1];

export default function ProductGallery(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const isVisible = useRef(null);

  useEffect(() => {
    function handleOutsideClick(e) {
      if (isVisible.current && !isVisible.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  function handleNext() {
    if (activeIndex === images.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  }

  function handlePrev() {
    if (activeIndex === 0) {
      setActiveIndex(images.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  }

  return (
    <div className="gallery-wrap  lg:hidden">
      <Swiper
        spaceBetween={10}
        navigation={false}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="main-swiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              onClick={() => {
                setActiveIndex(index);
                setIsOpen(true);
              }}
              src={img}
              alt={`shoe-${index + 1}`}
              className="main-image cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={12}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumb-swiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`thumb-${index + 1}`}
              className="thumb-image"
              onClick={() => setActiveIndex(index)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {isOpen && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.75)] flex justify-center items-center z-[9999]">
          <div ref={isVisible} className="relative flex flex-col items-center">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-10 right-0 text-white text-4xl cursor-pointer"
            >
              ×
            </button>

            <div className="relative">
              <button
                onClick={handlePrev}
                className="absolute left-[-28px] top-1/2 -translate-y-1/2 w-[56px] h-[56px] rounded-full bg-white flex justify-center items-center cursor-pointer"
              >
                ‹
              </button>

              <img
                src={images[activeIndex]}
                alt=""
                className="w-[550px] h-[550px] object-cover rounded-[16px]"
              />

              <button
                onClick={handleNext}
                className="absolute right-[-28px] top-1/2 -translate-y-1/2 w-[56px] h-[56px] rounded-full bg-white flex justify-center items-center cursor-pointer"
              >
                ›
              </button>
            </div>

            <div className="flex gap-6 mt-8">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                  onClick={() => setActiveIndex(index)}
                  className={`w-[88px] h-[88px] rounded-[10px] cursor-pointer ${
                    activeIndex === index
                      ? "border-2 border-[#FF7E1B] opacity-50"
                      : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
