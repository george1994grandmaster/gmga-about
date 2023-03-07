import { useState } from "react";
import { imageContent } from "../utils/data";
import nextButton from "../assets/images/nextButton.svg";
import previousButton from "../assets/images/previousButton.svg";
import xMark from "../assets/images/xMark.svg";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { Navigation, EffectFade } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { setModal, setModalClose } from "../features/imageGallerySlice";
const ImageGalleryModal = () => {
  const dispatch = useDispatch();
  const { slideIndex, images } = useSelector((store) => store.imageGallery);
  const [swiper, setSwiper] = useState(null);

  //Function to close modal on click of xMark
  const handleModalClose = (e) => {
    dispatch(setModalClose());
  };

  //Function to control of opening next and previous slide on press of arrowleft and arrowright keys
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        swiper.slideNext();
      }
      if (e.key === "ArrowLeft") {
        swiper.slidePrev();
      }
    });
  }, [swiper]);

  //Condition to open page content if content exsists
  if (slideIndex !== null && images.length > 0) {
    return (
      <section className="imageGalleryModal">
        <div className="closeModalButtonContainer">
          {" "}
          <button className="closeModalButton" onClick={handleModalClose}>
            <img src={xMark} alt="xMark" />
          </button>
        </div>
        <div className="swiperContainer">
          <Swiper
            modules={[Navigation, EffectFade]}
            navigation={images.length > 1 ? true : false}
            effect
            speed={700}
            onSwiper={(s) => {
              setSwiper(s);
            }}
            slidesPerView={1}
            loop
            className="swiper"
            initialSlide={slideIndex}
          >
            {images.map((image, index) => {
              return (
                <SwiperSlide className="swiperSlide" key={index}>
                  <img src={image} alt={image} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    );
  }
};

export default ImageGalleryModal;
