import userProfileImage from "../assets/images/cardImg1.png";
import CommentList from "./commentList";
import { postComment } from "../utils/data";
import { useState, useEffect } from "react";
import CommentForm from "./commentForm";
import PostContent from "./postContent";
const SinglePost = ({ post }) => {
  const {
    id,
    user_id,
    comments,
    description,
    gallery,
    img,
    like_count,
    name,
    surname,
    status,
  } = post;

  //This states will be moved to reduer when API is ready and redux store will be created...
  // The state below contains id of comment to which reply is opened, it is changed everytime user starts to reply to other comment
  const [ids, setIds] = useState();
  //The state below contains value of input inside comment form
  const [value, setValue] = useState("");
  //The state below contains ids of all replies to comments which have been shown
  const [idsOfReplies, setIdsOfReplies] = useState([]);
  //This state is used as dependecy for lineHeight calculating function, everytime more replies of replies are shown state is changed what triggers recalculation of line height
  const [commentsOpen, setCommentsOpen] = useState(false);
  //------------------------------//
  //The state below wont be moved to redux store as it is only used in this component, it will hide comments section until button to show comments is pressed
  const [repliesOpened, setRepliesOpened] = useState(false);

  // useEffect(() => {
  //   console.log(value, id);
  // }, [value]);
  return (
    <section className="singlePost">
      <PostContent
        setCommentsOpen={setCommentsOpen}
        commentsOpen={commentsOpen}
        post={post}
      />
      <CommentForm
        userImage={userProfileImage}
        placeholder="WRITE A COMMENT"
        depth={-1}
        isMainComment={true}
        postId={id}
        setValue={setValue}
      />
      {commentsOpen && (
        <>
          <CommentList
            repliesOpened={repliesOpened}
            setRepliesOpened={setRepliesOpened}
            comments={comments}
            depth={0}
            ids={ids}
            setIds={setIds}
            value={value}
            setValue={setValue}
            idsOfReplies={idsOfReplies}
            setIdsOfReplies={setIdsOfReplies}
            postId={id}
          />
        </>
      )}
    </section>
  );
};

export default SinglePost;
