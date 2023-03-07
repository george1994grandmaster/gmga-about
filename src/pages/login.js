import { useEffect } from "react";
import gmgaLogoLarge from "../assets/images/gmgaLogoLarge.svg";
import LoginModal from "../components/loginModal";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useSelector } from "react-redux";
const Login = () => {
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.user);

  const [loginFormOpen, setLoginFormOpen] = useState(true);

  const closeLoginForm = () => {
    setLoginFormOpen(false);
  };

  //Navigates user to home page if user tries to go to login page while already being logged in
  // useEffect(() => {
  //   if (user===true) {
  //     navigate("/");
  //   }
  // });

  //If user succesfully logins he is redirected to previous page after 1200ms of success page
  useEffect(() => {
    if (!loginFormOpen) {
      setTimeout(() => {
        navigate("/");
      }, 1200);
    }
  }, [loginFormOpen]);

  return (
    <section className="loginPage">
      {loginFormOpen ? (
        <div className="popupWrapper show">
          <div className="popupContainer">
            <LoginModal closeLoginForm={closeLoginForm} />
          </div>
        </div>
      ) : (
        <div className="loginSuccessContainer">
          <h3 className="loginSubTitle">VERIFICATION PASSED</h3>
          <div className="greetingContainer">
            <h3 className="loginTitle">
              WELCOME TO<p className="loginTitleRed"> GMGA</p>
            </h3>
          </div>
          <div className="loginSuccessLogoContainer">
            <img src={gmgaLogoLarge} alt="GMGA LOGO" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Login;
