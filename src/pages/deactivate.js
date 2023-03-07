//Libraries
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//Reducers
import {
  setAccountDeactivationError,
  deactivateAccount,
} from "../features/userSlice";
//Components
import ModalButton from "../components/modalButton";
import MainButton from "../components/mainButton";
//Assets and Styles
import "../assets/css/index.scss";
import backArrow from "../assets/images/leftArrow.svg";
import xMark from "../assets/images/xMark.svg";

const Deactivate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { accountDeactivationNotification } = useSelector(
    (store) => store.user
  );

  //Handles user data states
  const [userData, setUserData] = useState({ email: "", password: "" });

  const handleUserInfoChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  //Submit function to get the values from the form
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(deactivateAccount(userData));
    setModalOpen(!modalOpen);
  };

  //Handles opening and closing of deactivation confirmation modal
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = (e) => {
    e.preventDefault();
    if (!userData.email || !userData.password) {
      dispatch(setAccountDeactivationError("Please fill in all fields"));
      return;
    }
    setModalOpen(!modalOpen);
  };

  //If deactivation is suucessful user is navigated to finishing notification page
  useEffect(() => {
    if (accountDeactivationNotification.success === true) {
      navigate("/deactivationFinished");
    }
  }, [accountDeactivationNotification, navigate]);

  //Hides and shows overflow when modal is opened / closed
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else if (!modalOpen) {
      document.body.style.overflow = "scroll";
    }
  }, [modalOpen]);

  //Goes back to previous page
  const navigateBack = () => {
    navigate(-1);
  };

  //Modal Component
  const DeactivateModal = () => {
    return (
      <section className="deactivationModal" id="modalContainer">
        <div className="deactivationModalHeader">
          <MainButton image={xMark} handleClick={handleModal} />
        </div>
        <div className="deactivationModalMainContainer">
          <h3 className="deactivationConfirmationQuestion">
            {" "}
            Are you sure you want to deactivate your account?
          </h3>
          <div className="modalButtonsContainer">
            {/*This is button to submit the form and deactivate account*/}
            <ModalButton
              type="submit"
              text={"yes :("}
              handleClick={handleSubmit}
            />
            {/*This is button to close modal and cancel account deactivation*/}
            <ModalButton text={"no :)"} handleClick={navigateBack} />
          </div>
        </div>
      </section>
    );
  };

  const preventDefaultSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {modalOpen && <DeactivateModal />}
      <section className="deactivatePageContainer">
        <div className="backButtonContainer">
          {/*This is button to go to previous page + passed the backArrow prop to the button component to show the back arrow icon */}
          <MainButton
            image={backArrow}
            fontWeight={"700"}
            fontSize={"13px"}
            text={"back to settings"}
            handleClick={navigateBack}
          />
        </div>
        {/*Deactivate Form */}
        <form className="deactivateForm" onSubmit={preventDefaultSubmit}>
          {/*Modal to confirm the deactivation of account*/}
          {modalOpen && <div className="deactivateModalBackground" />}
          <h3 className="deactivateFormName">DEACTIVATE ACCOUNT</h3>
          <fieldset
            className={
              accountDeactivationNotification.text
                ? "fieldSetContainer fieldSetMarginSmall"
                : "fieldSetContainer fieldSetMarginNormal"
            }
          >
            <label className="deactivateLabel">
              Email:
              <input
                type="email"
                name="email"
                className="deactivateInput"
                onChange={handleUserInfoChange}
                autocomplete="off"
              />
            </label>
            <label className="deactivateLabel">
              Password:
              <input
                type="password"
                name="password"
                className="deactivateInput"
                onChange={handleUserInfoChange}
              />
            </label>

            {accountDeactivationNotification.text && (
              <div className="deactivateNotificationContainer">
                <p className="deactivationText">
                  {accountDeactivationNotification.text}
                </p>
              </div>
            )}
          </fieldset>
          {/*This is button to open modal which confirms account deactivation*/}
          <MainButton
            dark={true}
            fontWeight={"700"}
            fontSize={"13px"}
            text={"deactivate my account"}
            handleClick={handleModal}
          />
        </form>
      </section>
    </>
  );
};
export default Deactivate;
