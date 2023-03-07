import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { ProfileInfo } from "../utils/data";
import btnPrev from "../assets/images/btnPrev.svg";
import btnNext from "../assets/images/btnNext.svg";

const Slider = ({images}) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="slider-wrapper">
      <Swiper
        style={{ marginLeft: "-30px", marginRight: "-30px" }}
        className="mySwiper"
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onSwiper={(swiper) => {
          //setTimeout(() => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.navigation.destroy();
          swiper.navigation.init();
          swiper.navigation.update();
          //})
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        modules={[Navigation]}
        loop={true}
        spaceBetween={-28}
        grabCursor={true}
      >
        {images.map((slide, index) => {
          return (
              <SwiperSlide key={index}>
                <div className="swiperCol">
                  <img
                    className="slideImg"
                    src={slide.slideImg}
                    alt="slideImg"
                  />
                </div>
              </SwiperSlide>
          );
        })}
        <img
          src={btnPrev}
          style={{ width: "auto", left: "8px" }}
          ref={navigationPrevRef}
          className="swiper-button-prev"
          alt="slideNavigatePrev"
        />
        <img
          src={btnNext}
          style={{ width: "auto", right: "8px" }}
          ref={navigationNextRef}
          className="swiper-button-next"
          alt="slideNavigateNext"
        />
      </Swiper>
    </div>
  );
};

export default Slider;
