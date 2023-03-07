import { timeFormatter, dateToTimestamp } from "../utils/timeFormatter";
import CommentInput from "./commentForm";
import userProfileImage from "../assets/images/cardImg1.png";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { likeComment } from "../features/newsFeedSlice";
import Icon from "./postStatisticsIcon";
import likeIcon from "../assets/images/like.svg";

const Comment = ({
  props,
  depth,
  lineHeight,
  index,
  handleReply,
  commentsAr,
}) => {
  const { id, name, surname, img, created_at, comment, likers_ids, parent_comment_id } = props;

  const dispatch = useDispatch();
  const { user_id } = useSelector((store) => store.user);

  //Controls liking and unliking of comment
  const handleLike = (e) => {
    let likeData = { commentId: id, userId: user_id };
    dispatch(likeComment(likeData));
  };

  const checkIfUserLiked = () => {
    //returns false to make color of Icon component !blue.
    if (likers_ids.indexOf(user_id) > -1) {
      return false;
    } else {
      return true;
    }
  };
  //This is component for the single comment, and if the comment is last in array, vertical line connecting it to parent comment is rendered, the style in div is calculation of exact location of this line on dom
  return (
    <section className="commentContainer">
      <div className="commenterProfileImageContainer">
        {depth > 0 && <div className="cornerLine" />}
        {depth > 0 && index === commentsAr.length - 1 && (
          <div
            className="verticalLine"
            style={{
              height: `${lineHeight}px`,
              marginTop: `-${lineHeight}px`,
            }}
          />
        )}

        <img src={img} alt="user" />
      </div>
      <main className="commentMainContainer">
        <div className="commentContent">
          <h3 className="commenterFullName">
            {name} {surname}
          </h3>
          <p className="commentText">{comment}</p>
        </div>
        {/* this is div which contains all possible actions which can be taken on the given comment */}
        <div className="commentReactionsContainer">
          <button
            className={
              checkIfUserLiked()
                ? "commentLikeButton commentLikeButtonLiked"
                : "commentLikeButton commentLikeButtonNotLiked"
            }
            onClick={handleLike}
          >
            Like
          </button>
          <button className="commentReplyButton" onClick={handleReply}>
            Reply
          </button>
          <p className="commentDateLabel">
            {timeFormatter(dateToTimestamp(created_at)).toUpperCase()}
          </p>
          {likers_ids.length > 0 && (
            <Icon icon={likeIcon} count={likers_ids.length} blue={true} />
          )}
        </div>
      </main>
    </section>
  );
};

export default Comment;
