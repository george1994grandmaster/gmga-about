//This is components for buttons inside Modal Components
const ModalButton = (props) => {
  const { text, fontSize, fontWeight, handleClick } = props;
  const buttonStyle = {
    fontSize: fontSize,
    fontWeight: fontWeight,
  };
  return (
    <button className="modalButton" style={buttonStyle} onClick={handleClick}>
      {text}
    </button>
  );
};
export default ModalButton;
