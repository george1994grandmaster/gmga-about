//Libraries
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//Components
import Icon from "./postStatisticsIcon";
import ConfirmationModal from "./confirmationModal";
//Reducers
import { deletePost } from "../features/newsFeedSlice";
//Assets
import downloadIcon from "../assets/images/download.svg";
import likeIcon from "../assets/images/like.svg";
import commentsIcon from "../assets/images/message.svg";
import trashbinIcon from "../assets/images/trashbinIcon.svg";
const ProfileCard = ({ post }) => {
  const { profile, name, date, text, img, usersView, usersHandle } = post;
  const { id } = useParams();
  const dispatch = useDispatch();

  const { user, user_id } = useSelector((store) => store.user);

  //Functions to handle Delete Post Modal
  const [deletePostModal, setDeletePostModal] = useState(false);

  const toggleDeletePostModal = () => {
    setDeletePostModal(!deletePostModal);
  };

  const closeDeletePostModal = () => {
    setDeletePostModal(false);
  };

  const handleDeletePost = () => {
    dispatch(deletePost({ user_id: user_id, post_id: "7-11-DELETEID" }));
    setDeletePostModal(false);
  };

  //Functions to handle Sharing of Posts
  const [sharePostModal, setSharePostModal] = useState(false);

  const toggleSharePostModal = () => {
    setSharePostModal(!sharePostModal);
  };

  const handleSharePost = () => {};

  const closeSharePostModal = () => {
    setSharePostModal(false);
  };

  //Useeffect to show and hide overflow bar
  useEffect(() => {
    if (deletePostModal) {
      document.body.style.overflow = "hidden";
    } else if (!deletePostModal) {
      document.body.style.overflow = "auto";
    }
  }, [deletePostModal]);

  return (
    <section className="singleUserPostContainer">
      {deletePostModal && (
        <ConfirmationModal
          handleYes={handleDeletePost}
          handleNo={toggleDeletePostModal}
          handleRefClick={closeDeletePostModal}
          question="Are you sure you want to delete this post?"
        />
      )}
      {sharePostModal && (
        <ConfirmationModal
          handleYes={handleSharePost}
          handleNo={toggleSharePostModal}
          handleRefClick={closeSharePostModal}
          question="Are you sure you want to share this post?"
        />
      )}
      <div className="singleUserPostHeader">
        <span className="posterProfileImageContainer">
          <img src={profile} alt="postCardProfile" />
        </span>
        <span className="otherPostInformationContainer">
          <p className="posterName">{name}</p>
          <p className="postDate">{date}</p>
        </span>
      </div>
      {text && <p className="profileCardMainText">{text}</p>}
      <NavLink to="*" className="profileCardImageContainer">
        {post.img ? <img src={img} alt="profileCardImg" /> : ""}
      </NavLink>
      <section className="profileCardReactions">
        <div className="handleResults">
          <Icon
            icon={likeIcon}
            count={"231"}
            blue={false}
            pinned={false}
            // handleClick={() => handleReactButton("like")}
          />
          <Icon
            icon={commentsIcon}
            count={"21"}
            blue={false}
            pinned={false}
            // handleClick={() => handleReactButton("like")}
          />
          <Icon
            icon={downloadIcon}
            count={"8"}
            blue={false}
            pinned={false}
            handleClick={toggleSharePostModal}
          />
          {id.toString() === user_id.toString() && (
            <Icon
              icon={trashbinIcon}
              blue={false}
              pinned={false}
              handleClick={toggleDeletePostModal}
            />
          )}
        </div>
      </section>
    </section>
  );
};

export default ProfileCard;
