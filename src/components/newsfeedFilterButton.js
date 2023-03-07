import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
const NewsfeedFilterButton = (props) => {
  const { text, icon, handleClick } = props;

  //Functions to handle highlighting only selected button and unselecting all other
  const { filterType } = useSelector((store) => store.newsFeed);
  const [selected, setSelected] = useState(false);

  const checkSelected = () => {
    if (filterType == text) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  };

  useEffect(() => {
    checkSelected();
  }, [filterType]);

  return (
    <button
      className={
        selected
          ? "newsfeedFilterButton newsfeedFilterButtonDark"
          : "newsfeedFilterButton newsfeedFilterButtonLight"
      }
      onClick={handleClick}
    >
      <img
        src={icon}
        alt="clock"
        className={
          selected
            ? "filterButtonIcon"
            : "filterButtonIcon filterButtonIconSelected "
        }
      />
      {text}
    </button>
  );
};

export default NewsfeedFilterButton;
