import Comment from "./comment";
import React from "react";
import { useRef, useEffect, useState } from "react";
import CommentForm from "./commentForm";
import userProfileImage from "../assets/images/cardImg1.png";
import seeMoreIcon from "../assets/images/seeMoreIcon.png";

const CommentList = ({
  comments,
  depth,
  ids,
  setIds,
  value,
  setValue,
  idsOfReplies,
  setIdsOfReplies,
  setRepliesOpened,
  repliesOpened,
  postId,
}) => {
  const [replyOpen, setReplyOpen] = useState(false);
  const [lineHeight, setLineHeight] = useState(0);
  const [commentsAr, setCommentsAr] = useState(comments);
  const [commentsArLength, setCommentsArLength] = useState(2);
  const [repliesShow, setRepliesShow] = useState(false);
  const lastElementRef = useRef(null);

  let marginLeft;
  //For replies margin is given so it appears as reply, not as other normal comment, so as design changes on screen size different margin is given depeneding on screen size
  switch (depth) {
    case 1:
      window.innerWidth > 769 ? (marginLeft = 60) : (marginLeft = 40);
      break;
    case 2:
      window.innerWidth > 769 ? (marginLeft = 120) : (marginLeft = 80);
      break;
    default:
      marginLeft = 0;
      break;
  }
  // console.log(commentsAr);

  //This useEffect statement resets comment connecting line so when new comments are added, or new input appears inside comments section line height changes
  useEffect(() => {
    if (lastElementRef.current !== null) {
      let offsetTop = lastElementRef.current.offsetTop;
      let parentElementOffsetTop =
        lastElementRef.current.parentElement.offsetTop;
      setLineHeight(offsetTop - parentElementOffsetTop);
    }
  }, [
    ids,
    idsOfReplies,
    value,
    repliesShow,
    commentsArLength,
    commentsAr,
    repliesOpened,
  ]);

  //This useEffect statement sets comments array to show only limited amount of comments
  useEffect(() => {
    setCommentsAr(comments.slice(0, commentsArLength));
    setRepliesOpened(!repliesOpened);
  }, [commentsArLength, depth]);

  //This function shows more main comments (ones at upper level) when user clicks on "View more comments" button - on each press 2x amount of comments are shown
  const showMoreComments = () => {
    setCommentsArLength(commentsArLength * 2);
  };

  return (
    <>
      {commentsAr.map((comment, index) => {
        const { id, parent_comment_id } = comment;

        //This function handles reply input opening / showing
        const handleReply = () => {
          setReplyOpen(true);
          setIds(id);
        };

        //This command is launched when no replies have been shown and show more replies is pressed for first time for given thread
        const showFirstReplies = (idSent) => {
          if (idSent === id && depth === 0) {
            setRepliesShow(true);
            setIdsOfReplies(idsOfReplies.concat(idSent));
          } else if (idSent === id && depth === 1) {
            setRepliesShow(true);
            setIdsOfReplies(idsOfReplies.concat(idSent));
          }
        };

        //This command is launched when we already see replies for given thread and we want to see more replies
        const showMoreRepliesOfReplies = () => {
          setCommentsArLength(commentsArLength * 2);
        };

        return (
          // ref is added to this element to measure how high the line should be between lowest comment in array and its parent comment
          <span
            key={id}
            id={id}
            ref={
              index === commentsAr.length - 1 && depth > 0
                ? lastElementRef
                : null
            }
          >
            {/* This is single comment component */}
            <div style={{ marginLeft: `${marginLeft}px` }}>
              <Comment
                props={comment}
                depth={depth}
                lineHeight={lineHeight}
                index={index}
                commentsLength={comments.length}
                commentsAr={commentsAr}
                handleReply={handleReply}
              />
            </div>
            {/* This input appears only if reply button is pressed*/}
            {replyOpen === true && ids === id && (
              <CommentForm
                userImage={userProfileImage}
                marginLeft={marginLeft}
                depth={depth}
                isMainComment={false}
                postId={postId}
                parentCommentId={parent_comment_id}
                commentId={id}
                setValue={setValue}
                placeholder="WRITE A REPLY"
                className={"marginTop"}
              />
            )}
            {/* This button appears only if there are no replies of the thread shown, on press button disappears and replies thread is shown */}
            {idsOfReplies.indexOf(id) < 0 &&
              comment.children &&
              comment.children.length > 0 &&
              depth < 2 && (
                <button
                  className="viewMoreCommentsButton"
                  style={{ marginLeft: marginLeft + 65 }}
                  onClick={() => showFirstReplies(id)}
                >
                  <img src={seeMoreIcon} alt="see more" />
                  View more replies
                </button>
              )}
            {/* As comment replies are shown recursively if there are replies to the comment then components is rerendered inside component */}
            {idsOfReplies.indexOf(id) > -1 &&
              repliesShow &&
              comment.children &&
              comment.children.length > 0 && (
                <CommentList
                  comments={comment.children}
                  depth={depth + 1}
                  ids={ids}
                  setIds={setIds}
                  value={value}
                  setValue={setValue}
                  idsOfReplies={idsOfReplies}
                  setIdsOfReplies={setIdsOfReplies}
                  repliesOpened={repliesOpened}
                  setRepliesOpened={setRepliesOpened}
                  postId={postId}
                />
              )}
            {/* This button shows more comments when we already see replies for given thread and we want to see more replies */}
            {comments.length > commentsAr.length &&
              (depth === 1 || depth === 2) &&
              commentsAr.length - 1 === index && (
                <button
                  className="viewMoreCommentsButton"
                  style={
                    depth === 1
                      ? { marginLeft: marginLeft + 25 }
                      : { marginLeft: marginLeft + 65 }
                  }
                  onClick={showMoreRepliesOfReplies}
                >
                  <img src={seeMoreIcon} alt="see more" />
                  View more replies
                </button>
              )}
          </span>
        );
      })}
      {/* This button shows more comments onClick on upper level  */}
      {commentsAr < comments && depth === 0 && (
        <button
          className="viewMoreCommentsButton"
          onClick={() => showMoreComments()}
          value={"comments"}
        >
          View more comments
        </button>
      )}
    </>
  );
};

export default CommentList;
