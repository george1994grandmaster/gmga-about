//Libraries
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
//Router
import { setModalOpen } from "../features/imageGallerySlice";
//Components
import MainButton from "../components/mainButton";
import ImageGalleryModal from "../components/imageGalleryModal";
import ProfileCard from "../components/profileCard";
import Slider from "../components/profilSlider";
//Assets
import InstagramIcon from "../assets/images/instagramIcon.svg";
import MailIcon from "../assets/images/mailIcon.svg";
import LanguagesIcon from "../assets/images/languageIcon.svg";
import PhoneIcon from "../assets/images/phoneIcon.svg";
import WhatsappIcon from "../assets/images/whatsappIcon.svg";
import { ProfileInfo } from "../utils/data";
const Profile = () => {
  const scroll = useRef();

  const [cards, setCards] = useState(ProfileInfo[0].cardPosts.slice(0, 9));

  const { scrollPosition, galleryModalOpen } = useSelector(
    (store) => store.imageGallery
  );
  const {
    name,
    surname,
    coverPhoto,
    profilePicture,
    activitiesProvided,
    whatsapp,
    instagram,
    mail,
    phone,
    languages,
    aboutUser,
  } = useSelector((store) => store.singleProfile);
  const dispatch = useDispatch();

  const [contactData] = useState([
    { item: whatsapp, itemType: "contact", icon: WhatsappIcon },
    { item: instagram, itemType: "contact", icon: InstagramIcon },
    { item: mail, itemType: "contact", icon: MailIcon },
    { item: phone, itemType: "contact", icon: PhoneIcon },
    { item: languages, itemType: "language", icon: LanguagesIcon },
  ]);

  const viewPhoto = (photo) => {
    const modalData = {
      scrollPosition: window.pageYOffset,
      galleryModalOpen: true,
      slideIndex: 1,
      images: [photo],
    };
    dispatch(setModalOpen(modalData));
  };

  const scrollUp = () => {
    scroll.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const showAllCards = () => {
    console.log("Show all cards");
  };
  return (
    <>
      {galleryModalOpen ? (
        <ImageGalleryModal />
      ) : (
        <section className="profilePage">
          <section className="profileBannersContainer">
            <div
              className="coverPhotoContainer"
              onClick={() => viewPhoto(coverPhoto)}
            >
              <img src={coverPhoto} alt="Profile Cover" />
              {/* <div className="editProfileCoverIcon">
                  <PhotoProfile
                    viewProfilePicture="View cover photo"
                    updateProfilePicture="update cover photo"
                  />
                </div> */}
            </div>
            <div className="profilePhotoAndNameContainer">
              <div
                className="profilePhotoContainer"
                onClick={() => viewPhoto(profilePicture)}
              >
                <span className="profileImage">
                  <img src={profilePicture} alt="profileImg" />
                </span>
                {/* <div className="editProfilePhotoOptionsContainer">
                    <PhotoProfile
                      viewProfilePicture="View profile picture"
                      updateProfilePicture="update profile picture"
                    />
                  </div> */}
              </div>
              <div className="nameContainer">
                <h2 className="name">
                  {name} {surname}
                </h2>
              </div>
            </div>
          </section>

          <section className="userInformationContainer">
            <h4 className="userSkillsLabel">ACTIVITIES</h4>
            <div className="userSkillsContainer">
              {activitiesProvided.map((skill, index) => {
                return (
                  <MainButton
                    key={index}
                    className="usersProfileSkills"
                    text={skill}
                  />
                );
              })}
            </div>
            <div className="userProfileContactsContainer">
              {contactData.map((contact, index) => {
                const { item, itemType, icon } = contact;
                return (
                  <div className="userProfileContactItem" key={index}>
                    <div className="profileIconContainer">
                      <img src={icon} alt="contactImg" />
                    </div>
                    <p className="profileContactsText">{item}</p>
                  </div>
                );
              })}
            </div>
            <div className="profileAboutContent">
              <h5 className="profileAboutLabel">ABOUT {name}</h5>
              <p className="profileAboutText">{aboutUser}</p>
            </div>
            <Slider />
          </section>
          <section className="profileCardsContainer" ref={scroll}>
            <h2 className="profileCardsLabel">POSTS</h2>
            <div className="postCardsContent">
              {cards.map((post, index) => {
                return <ProfileCard key={index} post={post} />;
              })}
            </div>
            {/* <div className="scrollerContent">
              <button className="btn scroller" onClick={scrollUp}>
                <img src={scroller} alt="scroller" />
              </button>
            </div> */}
            <div className="showMorePostsButtonContainer">
              <MainButton
                handleClikc={showAllCards}
                text={"SEE MORE POSTS"}
                className="showMorePostsButton"
              />
            </div>
          </section>
        </section>
      )}
    </>
  );
};
export default Profile;
