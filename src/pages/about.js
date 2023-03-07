//Libraries
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAboutInfo } from "../features/aboutSlice";
//Swiper Data
import "../assets/css/index.scss";
// import { missionDescription } from "../utils/data";
// import { aboutDescription } from "../utils/data";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
//Components
import Slider from "../components/aboutSlider";
import aboutBanner from "../assets/images/aboutMountainsBanner.png";
import MissionLabel from "../assets/images/missionLabel.png";
//Utils
import { imageLink } from "../utils/timeFormatter";
const About = () => {
  const dispatch = useDispatch();
  const {
    aboutSliderImages,
    missionSliderImages,
    aboutDescription,
    aboutCoverBanner,
    missionText,
  } = useSelector((store) => store.about);

  useEffect(() => {
    dispatch(getAboutInfo());
  }, []);

  useEffect(() => {
    if (aboutCoverBanner) {
      console.log(console.log(`${imageLink}`));
    }
  }, []);
  return (
    <div className="wrapper">
      <section className="aboutMainContainer">
        <section className="aboutOverSection">
          <div className="container">
            <div className="aboutBannerContent">
              <img src={`${imageLink}${aboutCoverBanner}`} alt="aboutBanner" />
            </div>
            <div className="aboutDescription">
              {/* {aboutDescription &&
                aboutDescription.map((paragraph, index) => {
                  return (
                    <div className="text SliderOverText primary" key={index}>
                      {paragraph}
                    </div>
                  );
                })} */}
              <div className="text SliderOverText primary">
                {aboutDescription}
              </div>
            </div>
            <Slider images={aboutSliderImages} />
          </div>
        </section>
        <div className="borderCenterd">
          <div className="border"></div>
        </div>
        <section>
          <div className="container">
            <div className="missionBannerContent">
              <img src={MissionLabel} alt="mission" className="missionBanner" />
            </div>
            <p className="text missionText primary">{missionText}</p>
            <Slider images={missionSliderImages} />
          </div>
        </section>
      </section>
    </div>
  );
};

export default About;
