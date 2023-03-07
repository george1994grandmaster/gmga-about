//Libraries
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
//Components
import PhotoEditing from "../components/photoEditingConmponent";
import ImageGalleryModal from "../components/imageGalleryModal";
import MainButton from "../components/mainButton";

import { allActivities } from "../utils/realData";
//Assets
import InstagramIcon from "../assets/images/instagramIcon.svg";
import MailIcon from "../assets/images/mailIcon.svg";
import LanguagesIcon from "../assets/images/languageIcon.svg";
import PhoneIcon from "../assets/images/phoneIcon.svg";
import WhatsappIcon from "../assets/images/whatsappIcon.svg";
import editProfile from "../assets/images/editProfile.svg";
//Reducers
import { setModalOpen } from "../features/imageGallerySlice";
import { saveProfileInfo } from "../features/singleProfileSlice";
const EditProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const [editingName, setEditingName] = useState(false);

  const [userData, setUserData] = useState({
    name: `${name} ${surname}`,
    coverPhoto: coverPhoto,
    profilePicture: profilePicture,
    activitiesProvided: activitiesProvided,
    whatsapp: whatsapp,
    instagram: instagram,
    mail: mail,
    phone: phone,
    languages: languages,
    aboutUser: aboutUser,
  });

  const nameEditingInput = useRef();

  const closeNameEditing = (e) => {
    if (
      // editingName === true &&
      nameEditingInput.current &&
      !nameEditingInput.current.contains(e.target)
    ) {
      setEditingName(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeNameEditing, true);
    return () => {
      document.removeEventListener("click", closeNameEditing, true);
    };
  }, []);

  //Function to view photo in full screen using modal
  const viewPhoto = (photo) => {
    const modalData = {
      scrollPosition: window.pageYOffset,
      galleryModalOpen: true,
      slideIndex: 1,
      images: [photo],
    };
    dispatch(setModalOpen(modalData));
  };

  //Function to handle name editing, and open input to edit name on click
  const setNameEditingState = () => {
    setEditingName(!editingName);
  };

  //Function to handle all user information editing except skills
  const handleProfileInfo = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log("files:", e.target.files);
    console.log("object url:", URL.createObjectURL(e.target.files[0]));
    if (name === "profilePicture") {
      setUserData({
        ...userData,
        profilePicture: URL.createObjectURL(e.target.files[0]),
      });
    } else if (name === "coverPhoto") {
      setUserData({
        ...userData,
        coverPhoto: URL.createObjectURL(e.target.files[0]),
      });
    } else {
      setUserData({ ...userData, [name]: value });
    }
  };

  //Function to handle skills editing
  const handleSkills = (skill) => {
    if (userData.activitiesProvided.indexOf(skill) > -1) {
      setUserData({
        ...userData,
        activitiesProvided: userData.activitiesProvided.filter(
          (activity) => activity !== skill
        ),
      });
    } else {
      setUserData({
        ...userData,
        activitiesProvided: userData.activitiesProvided.concat(skill),
      });
    }
  };

  //Function to save edited information and dispatch to reduux
  const dispatchSaveProfileInfo = (e) => {
    // e.preventDefault();
    dispatch(saveProfileInfo(userData));
    navigate("/profile");
  };

  return (
    <>
      {galleryModalOpen ? (
        <ImageGalleryModal />
      ) : (
        <span className="editProfilePage">
          <section className="editProfileMainUserBanner">
            <div className="editCoverPhotoContainer">
              <img
                className="editProfileCoverPhoto"
                src={userData.coverPhoto}
                alt="Profile Cover"
              />
              <div className="editProfileCoverIcon">
                <PhotoEditing
                  viewProfilePicture="View cover photo"
                  updateProfilePicture="update cover photo"
                  handleChange={handleProfileInfo}
                  data={userData.coverPhoto}
                  name={"coverPhoto"}
                  viewPhoto={viewPhoto}
                />
              </div>
            </div>
            <div className="editProfilePhotoAndNameContainer">
              <div className="editProfilePhotoContainer">
                <span className="editProfileImage">
                  <img src={userData.profilePicture} alt="profileImg" />
                </span>
                <div className="editProfilePhotoOptionsContainer">
                  <PhotoEditing
                    viewProfilePicture="View profile picture"
                    updateProfilePicture="update profile picture"
                    handleChange={handleProfileInfo}
                    data={userData.profilePicture}
                    name={"profilePicture"}
                    viewPhoto={viewPhoto}
                  />
                </div>
              </div>
              <div className="editNameContainer" ref={nameEditingInput}>
                {editingName ? (
                  <div className="editUpdateContent">
                    <input
                      type="text"
                      value={userData.name}
                      onChange={handleProfileInfo}
                      name="name"
                    />
                  </div>
                ) : (
                  <h2 className="editProfileUserName">
                    {userData.name} {userData.surname}
                  </h2>
                )}

                <button
                  className="editProfileBtn"
                  onClick={setNameEditingState}
                >
                  <img src={editProfile} alt="editProfile" />
                </button>
              </div>
            </div>
          </section>
          <section className="editProfileUserSettings">
            <h4 className="editProfileActivitiesLabel">ACTIVITIES</h4>
            <div className="selectableSkillsContainer">
              {/* Function to check if user provides given activity, and if user does, activity is highlighted */}
              {allActivities.map((skill, index) => {
                if (
                  userData.activitiesProvided.indexOf(skill.toUpperCase()) > -1
                ) {
                  return (
                    <MainButton
                      key={index}
                      text={skill}
                      className="selectableSkill"
                      selectable={true}
                      dark={true}
                      handleClick={() => handleSkills(skill.toUpperCase())}
                    />
                  );
                } else {
                  return (
                    <MainButton
                      key={index}
                      text={skill}
                      className="selectableSkill"
                      selectable={true}
                      dark={false}
                      handleClick={() => handleSkills(skill.toUpperCase())}
                    />
                  );
                }
              })}
            </div>
            <section
              // action=""
              // onSubmit={saveProfileInfo}
              className="editFormContainer"
            >
              <div className="row">
                <div className="formFlexibleBlock">
                  <div className="editFormCol">
                    <label>
                      <h4 className="text contactInfoTitle">CONTACT INFO</h4>
                      <div className="col">
                        <div className="formColIcon">
                          <img src={WhatsappIcon} alt="whatsApp" />
                        </div>
                        <input
                          id="whatsapp"
                          type="text"
                          autoComplete="off"
                          value={userData.whatsapp}
                          className="userInfoInput"
                          onChange={handleProfileInfo}
                          name="whatsapp"
                          placeholder="Whatsapp"
                        />
                      </div>
                      <div className="col">
                        <div className="formColIcon">
                          <img src={InstagramIcon} alt="instagram" />
                        </div>
                        <input
                          id="instagram"
                          type="text"
                          autoComplete="off"
                          value={userData.instagram}
                          className="userInfoInput"
                          onChange={handleProfileInfo}
                          name="instagram"
                          placeholder="Instagram"
                        />
                      </div>
                      <div className="col">
                        <div className="formColIcon">
                          <img src={MailIcon} alt="mail" />
                        </div>
                        <input
                          id="email"
                          type="email"
                          autoComplete="off"
                          value={userData.mail}
                          className="userInfoInput"
                          onChange={handleProfileInfo}
                          name="email"
                          placeholder="Mail"
                        />
                      </div>
                      <div className="col">
                        <div className="formColIcon">
                          <img src={PhoneIcon} alt="phone" />
                        </div>
                        <input
                          id="phone"
                          type="text"
                          autoComplete="off"
                          value={userData.phone}
                          className="userInfoInput"
                          onChange={handleProfileInfo}
                          name="phone"
                          placeholder="Phone"
                        />
                      </div>
                    </label>
                  </div>
                  <div className="editFormCol">
                    <label>
                      <h4 className="text contactInfoTitle">LANGUAGES</h4>
                      <div className="col">
                        <div className="formColIcon">
                          <img src={LanguagesIcon} alt="whatsApp" />
                        </div>
                        <input
                          type="text"
                          autoComplete="off"
                          value={userData.languages}
                          className="userInfoInput"
                          onChange={handleProfileInfo}
                          name="languages"
                          placeholder="Languages///"
                        />
                      </div>
                    </label>
                  </div>
                </div>
                <div className="editFormCol textAreaColumn">
                  <label>
                    <h4 className="text contactInfoTitle">ABOUT YOU</h4>
                    <textarea
                      id="description"
                      type="text"
                      autoComplete="off"
                      value={userData.aboutUser}
                      onChange={handleProfileInfo}
                      name="aboutUser"
                    ></textarea>
                  </label>
                </div>
                <div className="editSaveBtn">
                  <button
                    className="editSbmBtn"
                    onClick={dispatchSaveProfileInfo}
                  >
                    SAVE CHANGES
                  </button>
                </div>
              </div>
            </section>
          </section>
        </span>
      )}
    </>
  );
};

export default EditProfile;
