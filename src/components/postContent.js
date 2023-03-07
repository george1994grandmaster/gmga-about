//Libraries
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//Components
import PostImageGallery from "./postImageGallery";
import Icon from "./postStatisticsIcon";
//Reducers
import { likePost } from "../features/newsFeedSlice";
//Assets
import downloadIcon from "../assets/images/download.svg";
import likeIcon from "../assets/images/like.svg";
import commentIcon from "../assets/images/message.svg";
import arrowUpIcon from "../assets/images/arrowUp.svg";

import { timeFormatter, dateToTimestamp } from "../utils/timeFormatter";

const PostContent = ({ pinned, setCommentsOpen, commentsOpen, post }) => {
  const {
    id,
    comments,
    description,
    gallery,
    img,
    likers_ids,
    comments_count,
    name,
    surname,
    status,
    created_at,
  } = post;
  const dispatch = useDispatch();
  const { user_id } = useSelector((store) => store.user);

  //There was no example of files or how they should be handled, NEEDS ATTENTION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const [files, setFile] = useState(null);


  //Handle clicks on reaction buttons
  const handleReactButton = (type) => {
    if (type === "like") {
      dispatch(likePost({ postId: id, userId: user_id }));
    } else if (type === "comments") {
      setCommentsOpen(!commentsOpen);
    } else if (type === "share") {
      console.log("share post");
    }
  };

  //Checks if user has like given post / comment
  const checkIfUserLiked = () => {
    //returns false to make color of Icon component !blue.
    if (likers_ids.indexOf(user_id) > -1) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <span className="postContent">
      <section className="userContainer">
        <img
          src={img}
          alt="Giorgi Tsibakhashvili"
          className={pinned ? "pinnedPosterProfileImage" : "posterProfileImage"}
        />
        <div className="postInformationContainer">
          <h3
            className={
              pinned ? "pinnedPosterFullName posterFullName" : "posterFullName"
            }
          >
            {`${name} ${surname}`}
          </h3>
          <p className={pinned ? "pinnedPostDate postDate" : "postDate"}>
            {timeFormatter(dateToTimestamp(created_at))}
          </p>
        </div>
      </section>
      <main className="postMainContent">
        <p className={pinned ? "pinnedPostText" : "postText"}>{description}</p>
        {files && (
          <div className="downloadFileContainer">
            <a
              href="/images/myw3schoolsimage.jpg"
              download="w3logo"
              className="downloadFileButton"
            >
              <img src={downloadIcon} alt="Download" />
              agi.pdf
            </a>
          </div>
        )}
        <PostImageGallery images={gallery} pinned={pinned} />
      </main>
      <section className="postStatistics">
        <div className="postReactionsContainer">
          <Icon
            icon={likeIcon}
            count={likers_ids.length}
            blue={checkIfUserLiked()}
            pinned={pinned}
            handleClick={() => handleReactButton("like")}
          />
          <Icon
            icon={commentIcon}
            count={comments_count}
            blue={commentsOpen}
            pinned={pinned}
            handleClick={() => handleReactButton("comments")}
          />
          <Icon
            icon={arrowUpIcon}
            count={"25"}
            blue={false}
            pinned={pinned}
            handleClick={() => handleReactButton("share")}
          />
        </div>
        {/* <div className="reactButtonsContainer">
          {reactIcons.map((react, index) => {
            const { icon, text } = react;
            return (
              <button
                className="reactButton"
                key={index}
                onClick={() => handleReactButton(text)}
              >
                <img src={icon} alt={text} />
                {!pinned && <p>{text}</p>}
              </button>
            );
          })}
        </div> */}
      </section>
    </span>
  );
};

export default PostContent;
