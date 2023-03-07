import { useState } from "react";

const sidebarData = [
  "forum",
  "featured",
  "members",
  "photos",
  "videos",
  "files",
];

const ForumSidebar = () => {
  const [selected, setSelected] = useState("forum");

  const handleClick = (type) => {
    setSelected(type);
  };
  return (
    <section className="forumSidebarContainer">
      {sidebarData.map((type, index) => {
        return (
          <button
            key={index}
            className={
              selected === type ? "sidebarOption selected" : "sidebarOption"
            }
            onClick={() => handleClick(type)}
          >
            {type}
          </button>
        );
      })}
    </section>
  );
};
export default ForumSidebar;
