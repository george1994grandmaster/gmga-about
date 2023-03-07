import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { ProfileInfo } from "../utils/data";
import Settings from "../assets/images/settings.svg";
import SettingsShare from "../assets/images/settingsShare.svg";
import SettingsDelete from "../assets/images/settingsDelete.svg";
import btnPrev from "../assets/images/btnPrev.svg";
import btnNext from "../assets/images/btnNext.svg";

const Slider = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", function (e) {
      if (e.target.className !== "settingsIcon") {
        const dropDown = document.querySelectorAll(".settingsOptions");
        for (let i = 0; i < dropDown.length; i++) {
          if (dropDown[i].classList.contains("active")) {
            dropDown[i].classList.remove("active");
          }
        }
      }
    });
  }, []);

  const dropOption = (e) => {
    const parentElement = e.target.closest(".swiper-settings");
    const currentOption = parentElement.querySelector(".settingsOptions");
    if (currentOption.classList.contains("active")) {
      currentOption.classList.remove("active");
    } else {
      const currentOptions = document.querySelectorAll(".settingsOptions");
      for (let i = 0; i < currentOptions.length; i++) {
        currentOptions[i].classList.remove("active");
      }
      currentOption.classList.add("active");
    }
  };

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
        {ProfileInfo[0].slider.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="g">
                <div style={{ position: "relative" }}>
                  <div className="swiper-settings" /*onClick={dropOption}*/>
                    <button className="settingsSvg" onClick={dropOption}>
                      <img
                        className="settingsIcon"
                        src={Settings}
                        alt="settings"
                      />
                    </button>
                    <div className="settingsOptions">
                      <button className="settingsOption settingsSpace">
                        <div className="settingsImg">
                          <img
                            className="settingsShare"
                            src={SettingsShare}
                            alt="settingsShare"
                          />
                        </div>
                        <span className="share text">Share</span>
                      </button>
                      <button className="settingsOption">
                        <div className="settingsImg">
                          <img
                            className="settingsDelete"
                            src={SettingsDelete}
                            alt="settingsShare"
                          />
                        </div>
                        <span className="delete text">Delete</span>
                      </button>
                    </div>
                  </div>
                  <div className="swiperCol">
                    <img
                      className="slideImg"
                      src={slide.slideImg}
                      alt="slideImg"
                    />
                  </div>
                </div>
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
