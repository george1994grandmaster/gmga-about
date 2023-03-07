//Library elements
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../features/newsFeedSlice";
//Reducers
import { closeAddPostModal } from "../features/newsFeedSlice";
//Components
import MainButton from "./mainButton";
import Loading from "./loading";
import PostFormInput from "./postFormInput";
//Assets
import cameraIcon from "../assets/images/cameraIcon.svg";
import attachIcon from "../assets/images/attachIcon.svg";
import xMark from "../assets/images/xMark.svg";

const AddPostModal = () => {
  const dispatch = useDispatch();
  const { addPostIsLoading } = useSelector((store) => store.newsFeed);
  const { user_id, user_img } = useSelector((store) => store.user);

  const [postData, setPostData] = useState({
    text: "",
    images: [],
    files: [],
    poster_id: user_id,
  });

  //Click listener and Ref is added to close down modal if outside of modal is pressed

  const modalRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", closeModalOnBackground, true);
  }, []);

  //FUNCTION TO SUBMIT NEW POST
  const handleAddNewPost = (e) => {
    e.preventDefault();
    dispatch(addPost(postData));
    dispatch(closeAddPostModal());
  };

  //Functions to handle upload of data for posting
  const handlePhotoUpload = (event) => {
    setPostData({ ...postData, images: event.target.files });
  };

  const handleFileUpload = (event) => {
    setPostData({ ...postData, files: event.target.files });
  };

  const handleText = (value) => {
    setPostData({ ...postData, text: value });
  };
  //--------------------------------------------//
  //Functions to close opened posting modal
  const closeModalOnBackground = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      dispatch(closeAddPostModal());
    }
  };

  const closeModal = () => {
    dispatch(closeAddPostModal());
  };

  return (
    <section className="addPostModalContainer">
      <div className="addPostModalBackground" />
      <form
        className={
          !addPostIsLoading
            ? "addPostModal"
            : "addPostModal addPostModalLoading"
        }
        onSubmit={handleAddNewPost}
        ref={modalRef}
        style={{
          height: !addPostIsLoading
            ? "auto"
            : `${modalRef.current && modalRef.current.clientHeight}px`,
        }}
      >
        {!addPostIsLoading ? (
          <>
            <div className="addPostModalHeaderContainer">
              <button onClick={closeModal} className="closePostModalButton">
                <img src={xMark} alt="Close Modal" />
              </button>
            </div>
            <section className="addPostModalInputsContainer">
              <div className="postInputContainer">
                <PostFormInput
                  placeholder="WRITE A POST"
                  userImage={user_img}
                  handlePostText={handleText}
                  value={postData.text}
                />
              </div>

              <div className="addPostButtonsContainer">
                <span className="attachButtonsContainer">
                  <label className="attachFileButton">
                    <input
                      type="file"
                      multiple
                      onChange={handlePhotoUpload}
                      accept="image/jpeg, image/png"
                    />

                    <img src={cameraIcon} alt="camera" />
                    <span className="attachInformation">
                      add photos{" "}
                      {postData.images.length > 0 && (
                        <p className="photosSelected">
                          {postData.images.length} selected{" "}
                        </p>
                      )}
                    </span>
                  </label>

                  <label className="attachFileButton">
                    <input
                      type="file"
                      multiple
                      onChange={handleFileUpload}
                      accept=".pdf, .doc, .docx"
                    />

                    <img src={attachIcon} alt="paperClip" />
                    <span className="attachInformation">
                      add files{" "}
                      {postData.files.length > 0 && (
                        <p className="photosSelected">
                          {postData.files.length} selected{" "}
                        </p>
                      )}
                    </span>
                  </label>
                </span>
                <MainButton
                  dark={true}
                  text={"post"}
                  handleClick={handleAddNewPost}
                  className="addPostModalButton"
                />
              </div>
            </section>
          </>
        ) : (
          <Loading className={"loading"} />
        )}
      </form>
    </section>
  );
};

export default AddPostModal;
