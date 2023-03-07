import { useLayoutEffect, useRef, useState, useEffect } from "react";

const PostFormInput = (props) => {
  const [additionalMargin, setAdditionalMatgin] = useState(0);
  const [commentData, setCommentData] = useState({
    commentValue: "",
    parentCommentId: "",
    isMainComment: "",
    postId: "",
  });
  const {
    userImage,
    marginLeft,
    depth,
    value,
    handlePostText,
    placeholder,
    className,
  } = props;

  const textareaRef = useRef(null);
  //As text input is changed state is also changed

  const onChange = (event) => {
    handlePostText(event.target.value);
  };

  //This useLayoutEffect is used to increase height of textarea input when more text iadded
  useLayoutEffect(() => {
    textareaRef.current.style.height = "50px";
    window.innerWidth > 769
      ? (textareaRef.current.style.height = "50px")
      : (textareaRef.current.style.height = "40px");
    textareaRef.current.style.height = `${Math.max(
      textareaRef.current.scrollHeight
    )}px`;
  }, [value]);

  //As reply to comments should appear parallel to child threads, additional margin is given according to sreen size.
  useEffect(() => {
    if (window.innerWidth > 769) {
      setAdditionalMatgin(60);
    } else {
      setAdditionalMatgin(40);
    }
  }, []);
  return (
    <section className={`postFormInputContainer ${className}`}>
      {userImage && (
        <div className="postModalUserProfileImageContainer">
          {" "}
          <img src={userImage} alt="user" />
        </div>
      )}
      <textarea
        onChange={onChange}
        placeholder={placeholder}
        ref={textareaRef}
        value={value}
        className="postInput"
        rows={1}
      ></textarea>
    </section>
  );
};

export default PostFormInput;
