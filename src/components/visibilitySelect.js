import { useEffect, useState } from "react";
import arrowIcon from "../assets/images/arrowIcon.svg";
import { useRef } from "react";
import { handleUserPostVisibility } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
let visibilityOptions = [
  {
    label: "PUBLIC",
  },
  {
    label: "FORUM MEMBERS ONLY",
  },
];
//This component is for dropdown in settings menu, it helps you choose privacy level visibility of user's content
const VisibilitySelect = () => {
  const dispatch = useDispatch();

  const visibilitySelectRef = useRef(null);

  const { userPostVisibilityOption } = useSelector((store) => store.user);

  const [selectedOption, setSelectedOption] = useState({
    label: userPostVisibilityOption,
  });

  const [optionsOpen, setOptionsOpen] = useState(false);

  const handleOptions = () => {
    if (optionsOpen === false) {
      setOptionsOpen(true);
    } else if (optionsOpen === true) {
      setOptionsOpen(false);
    }
  };

  const handleOptionsClose = () => {
    setOptionsOpen(false);
  };

  const chooseOption = ({ label }) => {
    handleOptionsClose();
    setSelectedOption({ label });
    dispatch(handleUserPostVisibility(label));
  };

  const closeSelect = (e) => {
    if (e.target.parentElement !== visibilitySelectRef.current) {
      setOptionsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeSelect, true);
  }, []);

  return (
    <section className="visibilitySelectContainer" ref={visibilitySelectRef}>
      {/* Button for currecy drop down which contains selected label and arrow inside dropdown  */}
      <button
        onClick={handleOptions}
        // ref={this.selectorRef}
        className="selected"
      >
        {selectedOption.label}
        <img
          src={arrowIcon}
          alt="Arrow"
          className={optionsOpen ? "rotate arrowIcon" : "arrowIcon"}
        />
      </button>
      <div className={optionsOpen ? "options optionsShow" : "options"}>
        {/* All currency options are mapped below */}
        {visibilityOptions.map((option, index) => {
          const { label } = option;
          return (
            <button
              key={index}
              className="singleOption"
              onClick={() => chooseOption({ label })}
              value={label}
            >
              {label}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default VisibilitySelect;
