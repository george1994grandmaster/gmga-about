import xMark from "../assets/images/xMarkBold.svg";
import MainButton from "./mainButton";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { loginUser, recoverPassword } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  usernameOrEmail: "",
  recoverEmail: "",
  password: "",
};

const LoginModal = ({ closeLoginForm }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { errorMessage, user } = useSelector((store) => store.user);

  const [recoverEmail, setRecoverEmail] = useState("");
  //States of user information
  const [values, setValues] = useState(initialState);

  //States of modal stages, defines in which stage user is
  const [passwordForgot, setPasswordForgot] = useState(false);
  const [passwordRecovered, setPasswordRecovered] = useState(false);
  const [verificationError, setVerificationError] = useState("");

  //Navigate back to previous page on modal close
  const closeLoginModal = () => {
    navigate(-1);
  };

  //Naviatge user to password recovery via email form
  const initiatePasswordForgot = () => {
    setVerificationError("");
    setPasswordForgot(true);
  };

  //Login user
  const handleLogin = (e) => {
    e.preventDefault();
    //Verification that all fields are filled in
    if (values.loginUsername === "" || values.password === "") {
      setVerificationError("You have some fields missing.");
      return;
    }
    dispatch(
      loginUser({ username: values.usernameOrEmail, password: values.password })
    );

    //If login succesful user redirected to previous page, if not error message is set and deisplayed
    if (user) {
      closeLoginForm();
    } else {
      setVerificationError("Wrong username or password.");
      return;
    }
  };

  //Provide recovery email and return user to LogIn Form
  const resetPassword = (e) => {
    e.preventDefault();
    if (values.recoverEmail === "") {
      setVerificationError("You have some fields missing.");
      return;
    }
    dispatch(recoverPassword({ email: values.recoverEmail }));
    setPasswordForgot(false);
    setVerificationError("");
    setPasswordRecovered(true);
    setValues(initialState);
  };

  //Set state for inputs
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  return (
    <section className="loginModal">
      <div className="loginModalHeader">
        <MainButton
          image={xMark}
          handleClick={closeLoginModal}
          className="closeLoginModalButton"
        />
      </div>
      {passwordForgot ? (
        <section className="loginForm">
          <h3 className="modalLabel">Recover Password</h3>
          <div className="loginInputsContainer">
            <span className="singleInputContainer">
              <input
                className="loginInput"
                type="email"
                name="recoverEmail"
                onChange={handleChange}
                placeholder="Write your email here"
              />
            </span>
            {verificationError && (
              <p className="errorMessageLabel">{verificationError}</p>
            )}
            <p className="passwordRecoveryLabel">
              New password will be sent to you via Email
            </p>
          </div>

          <MainButton
            handleClick={resetPassword}
            className="submitLoginForm"
            text="NEXT"
          />
        </section>
      ) : (
        <form className="loginForm" onSubmit={handleLogin}>
          <h3 className="modalLabel">LOG IN</h3>
          {passwordRecovered && (
            <p className="passwordRecoveredLabel">
              Check Your Email For New password
            </p>
          )}
          <div className="loginInputsContainer">
            <span className="singleInputContainer">
              <input
                className="loginInput"
                type="text"
                name="usernameOrEmail"
                onChange={handleChange}
                placeholder="EMAIL OR USERNAME"
              />
            </span>
            <span className="singleInputContainer">
              <input
                className="loginInput"
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="PASSWORD"
              />
              <button
                className="forgotPasswordButton"
                type="Button"
                onClick={() => initiatePasswordForgot()}
              >
                Forgot?
              </button>
            </span>
            {verificationError && (
              <p className="errorMessageLabel">{verificationError}</p>
            )}
          </div>
          <button type="submit" className="submitLoginForm">
            log in
          </button>
        </form>
      )}
    </section>
  );
};

export default LoginModal;
