import { useEffect, useState, useRef } from "react";
import Photo from "../assets/images/photo.svg";
import viewProfile from "../assets/images/viewProfile.svg";
import updateProfile from "../assets/images/updateProfile.svg";
import vectorUp from "../assets/images/vectorUp.png";
const PhotoEditing = (props) => {
  const {
    handleChange,
    viewProfilePicture,
    updateProfilePicture,
    data,
    viewPhoto,
    name,
  } = props;
  const photoOptionsUpload = useRef();
  const photoViewFull = useRef();
  const [optionsShown, setOptionsShown] = useState(false);

  useEffect(() => {
    document.addEventListener("click", closeOptionsShow, true);
  }, []);

  useEffect(() => {
    setOptionsShown(false);
  }, [data]);

  const closeOptionsShow = (e) => {
    if (photoViewFull.current && !photoViewFull.current.contains(e.target)) {
      setOptionsShown(false);
    }
  };
  const toogleOptionsShow = (e) => {
    setOptionsShown(!optionsShown);
  };

  const handleView = () => {
    viewPhoto(data);
  };

  return (
    <div className="photoOptionsContent">
      <div className="photoProfileCenter">
        <button className="btn photoprofileContent" onClick={toogleOptionsShow}>
          <img
            style={{ pointerEvents: "none" }}
            src={Photo}
            alt="Camera Icon"
          />
        </button>
      </div>
      {optionsShown && (
        <div className="photoOptions visible" ref={photoViewFull}>
          <button className="attachFileButton" onClick={handleView}>
            <div style={{ marginRight: "15px" }}>
              <img
                style={{ width: "22px" }}
                src={viewProfile}
                alt="profilePicture"
              />
            </div>
            <p className="text primary">{viewProfilePicture}</p>
          </button>

          <label className="attachFileButton" ref={photoOptionsUpload}>
            <div style={{ marginRight: "15px" }}>
              <img src={updateProfile} style={{ width: "22px" }} alt="camera" />
            </div>
            <input
              type="file"
              onChange={handleChange}
              name={name}
              accept="image/jpeg, image/png"
            />
            <p className="text primary">{updateProfilePicture}</p>
          </label>
        </div>
      )}
    </div>
  );
};

export default PhotoEditing;
