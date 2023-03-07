import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { addComment } from "../features/newsFeedSlice";
import { useDispatch, useSelector } from "react-redux";

import subtmitCommentIcon from "../assets/images/submitCommentIcon.png";

import Loading from "./loading";

const CommentForm = (props) => {
  const dispatch = useDispatch();
  const { user_id, user_img} = useSelector((store) => store.user);
  const { addCommentIsLoading } = useSelector((store) => store.newsFeed);

  const [additionalMargin, setAdditionalMatgin] = useState(0);

  const {
    marginLeft,
    depth,
    placeholder,
    className,
    postInput,
    commentId,
    postId,
    isMainComment,
    setValue,
    parentCommentId,
  } = props;

  const [commentData, setCommentData] = useState({
    commentValue: "",
    parentCommentId: "",
    isMainComment: "",
    postId: "",
    commenter_id: "",
  });

  const textareaRef = useRef(null);

  //As text input is changed state is also changed
  const handleComment = (event) => {
    let commentValue = event.target.value;
    setValue(commentValue);
    if (isMainComment) {
      //If comment is single comment to post and not reply only commenter's data and post info is provided
      setCommentData({
        commentValue: commentValue,
        replyingToCommentId: null,
        isMainComment: isMainComment,
        postId: postId,
        commenter_id: user_id,
      });
      //If comment is reply to already ongoing thread than id of comment to which it is being replies is provided
    } else if (!isMainComment && depth < 2) {
      setCommentData({
        commentValue: commentValue,
        replyingToCommentId: commentId,
        isMainComment: isMainComment,
        postId: postId,
        commenter_id: user_id,
      });
      //If level of commenting is the most deepest allowed (deepness level 2) then comment should be added to parent comment's children array so parrentCommentId is provided
    } else if (!isMainComment && depth > 1) {
      setCommentData({
        commentValue: commentValue,
        replyingToCommentId: parentCommentId,
        isMainComment: isMainComment,
        postId: postId,
        commenter_id: user_id,
      });
    }
  };

  const submitComment = (e) => {
    e.preventDefault();
    dispatch(addComment(commentData));
    setCommentData({
      commentValue: "",
      parentCommentId: "",
      isMainComment: "",
      postId: "",
    });
  };

  //This useLayoutEffect is used to increase height of textarea input when more text iadded
  useLayoutEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "50px";
      window.innerWidth > 769
        ? (textareaRef.current.style.height = "50px")
        : (textareaRef.current.style.height = "40px");
      textareaRef.current.style.height = `${Math.max(
        textareaRef.current.scrollHeight
      )}px`;
    }
  }, [commentData.commentValue]);

  //As reply to comments should appear parallel to child threads, additional margin is given according to sreen size.
  useEffect(() => {
    if (window.innerWidth > 769) {
      setAdditionalMatgin(60);
    } else {
      setAdditionalMatgin(40);
    }
  }, []);
  return (
    <>
      {!addCommentIsLoading ? (
        <form
          className={`commentInputForm ${className}`}
          style={
            depth > 1
              ? {
                  marginLeft: `${marginLeft}px`,
                  width: `calc(100% - ${marginLeft}px)`,
                }
              : {
                  marginLeft: `${marginLeft + additionalMargin}px`,
                  width: `calc(100% - ${marginLeft + additionalMargin}px)`,
                }
          }
          onSubmit={submitComment}
        >
          <>
            {" "}
            {user_img && (
              <div
                className={
                  postInput
                    ? "postModalUserProfileImageContainer"
                    : "userProfileImageContainer"
                }
              >
                {" "}
                <img src={user_img} alt="user" />
              </div>
            )}
            <div className="commentInputContainer">
              <textarea
                onChange={handleComment}
                placeholder={placeholder}
                ref={textareaRef}
                value={commentData.commentValue}
                className="commentInput"
                rows={1}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    submitComment(e);
                  }
                }}
              ></textarea>
              <button className="commentSubmitButton" onClick={submitComment}>
                <img src={subtmitCommentIcon} alt="Submit Comment" />
              </button>
            </div>
          </>
        </form>
      ) : (
        <div className="commentUploadLoadingContainer">
          <Loading className={"loading_small"} />
        </div>
      )}
    </>
  );
};

export default CommentForm;
