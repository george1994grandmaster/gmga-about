import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost, openAddPostModal } from "../features/newsFeedSlice";
import MainButton from "./mainButton";
import CommentForm from "./commentForm";
import AddPostModal from "./addPostModal";
import cameraIcon from "../assets/images/cameraIcon.svg";
import attachIcon from "../assets/images/attachIcon.svg";
import userProfileImage from "../assets/images/cardImg1.png";

const AddPost = () => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(openAddPostModal());
  };

  return (
    <section className="addPostContainer">
      <div className="postInputContainer" onClick={openModal}>
        <CommentForm
          placeholder="WRITE A POST"
          userImage={userProfileImage}
          depth={-1}
        />
      </div>

      <div className="addPostButtonsContainer">
        <span className="attachButtonsContainer">
          <label className="attachFileButton" onClick={openModal}>
            <img src={cameraIcon} alt="camera" />
            <span className="attachInformation">add photos </span>
          </label>

          <label className="attachFileButton" onClick={openModal}>
            <img src={attachIcon} alt="paperClip" />
            <span className="attachInformation">add files </span>
          </label>
        </span>
        <MainButton
          dark={true}
          text={"post"}
          handleClick={openModal}
          className="addPostModalButton"
        />
      </div>
    </section>
  );
};
export default AddPost;
