import { useEffect, useRef } from "react";
const ConfirmationModal = (props) => {
  const { handleYes, handleNo, handleRefClick, question } = props;

  const modalRef = useRef(null);

  const closeModalOnBackground = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleRefClick();
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeModalOnBackground, true);
    return () => {
      document.removeEventListener("click", closeModalOnBackground, true);
    };
  }, []);

  return (
    <section className="standartConfirmationModalContainer">
      <span className="standartConfirmationModalBackground" />
      <div className="confirmationModal" ref={modalRef}>
        <p className="confirmationModalLabel">{question}</p>
        <div className="confirmationModalButtonsContainer">
          <button onClick={handleYes} className="confirmationModalButton">
            Yes
          </button>
          <button className="confirmationModalButton" onClick={handleNo}>
            No
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConfirmationModal;
