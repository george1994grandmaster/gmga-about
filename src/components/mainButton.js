import { useState } from "react";
//As most of the buttons are similar, I created a single component for all the buttons and passed the props to it.
const MainButton = (props) => {
  const {
    dark,
    fontWeight,
    fontSize,
    marginRight,
    image,
    text,
    handleClick,
    selectable,
    padding,
    className,
  } = props;
  const [selected, setSelected] = useState(dark);
  //As button has lots of different Font Weight and Font Size, I created a style object to pass the props to it.
  const buttonStyle = {
    marginRight: marginRight,
    fontSize: fontSize,
    fontWeight: fontWeight,
    padding: padding,
  };
  const handleMainButtonClick = (e) => {
    setSelected(!selected);
    if (handleClick) {
      handleClick(e);
    }
  };
  return (
    //I used ternary operator to check if the button is dark or light and then passed the class name accordingly.
    <button
      className={`standardButton ${className}  ${
        selected ? "darkMainButton" : "lightMainButton"
      }`}
      style={buttonStyle}
      onClick={selectable ? handleMainButtonClick : handleClick}
    >
      {image && (
        <img src={image} alt="arrow" style={text && { marginRight: "5px" }} />
      )}
      {/* If the text is not passed, then it will not show the text. */}
      {text && text}
    </button>
  );
};
export default MainButton;
