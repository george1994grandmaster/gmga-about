import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainButton from "../components/mainButton";
//Assets and Images
import HeaderLanguage from "../assets/images/headerLanguage.svg";
import MobileBtn from "../assets/images/mobileBtn.png";
import sideBarOpen from "../assets/images/sidebarIcon.png";
import arrowIcon from "../assets/images/arrowIcon.svg";
import notificationIcon from "../assets/images/notificationIcon.svg";
//Utils
import { imageLink } from "../utils/timeFormatter";
const Header = () => {
  const mobileNavBar = useRef();
  const navigate = useNavigate();

  //Data for header
  const { user, user_img } = useSelector((store) => store.user);
  const { headerLogo } = useSelector((store) => store.navBar);

  //Navbar visibility states
  const [displayNavbar, setDisplayNavbar] = useState(false);
  const [settingsDropdownOpen, setSettingsDropdownOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("touchmove", function (e) {
      const body = document.querySelector("body");
      if (e.target.closest(".mobile-navbar") === mobileNavBar.current) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "visible";
      }
    });

    document.addEventListener("click", closeDropDown, true);
    document.addEventListener("click", closeSideBar, true);
  }, []);

  const closeSideBar = (e) => {
    if (mobileNavBar.current && !mobileNavBar.current.contains(e.target)) {
      setDisplayNavbar(false);
    }
  };

  const closeDropDown = () => {
    setSettingsDropdownOpen(false);
  };
  const closeMobileNavBar = () => {
    setDisplayNavbar(false);
  };

  const openMobileNavBar = () => {
    setDisplayNavbar(true);
  };

  const handleNavigateToLogin = () => {
    if (!user) {
      navigate("/login");
    }
  };

  const handleHeaderDropdown = () => {
    setSettingsDropdownOpen(!settingsDropdownOpen);
  };
  return (
    <>
      <header>
        <section className="headerContainer">
          <div className="headerLogoContainer">
            <NavLink to="/home" className="header-logo">
              <img src={headerLogo} alt="header-logo" />
            </NavLink>
          </div>
          <ul className="header-area-menu">
            <li>
              <NavLink to="/about">ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="/gmga">GMGA</NavLink>
            </li>
            <li>
              <NavLink to="/language">
                <img src={HeaderLanguage} alt="header-language" />
              </NavLink>
            </li>
          </ul>
          <div className="userLoginHeaderContainer">
            {user ? (
              <>
                <MainButton
                  text={"forum"}
                  dark={true}
                  className="headerMainButton"
                />
                <NavLink to="/forum" className="notificationIconContainer">
                  <img src={notificationIcon} alt="Notification" />
                </NavLink>
                <div className="loggedInUserImageContainer">
                  <img src={user_img} alt="you" />
                </div>
                <div className="additionalSettingsDropdownContainer">
                  <button
                    className={`additionalSettingsDropdownButton `}
                    onClick={handleHeaderDropdown}
                  >
                    <img
                      src={arrowIcon}
                      alt="Arrow"
                      className={settingsDropdownOpen ? "arrowReversed" : ""}
                    />
                  </button>
                  {settingsDropdownOpen && (
                    <div className="additionalSettingsDropdown visible">
                      <NavLink
                        to="/editprofile"
                        className="additionalSettingsNavigation"
                      >
                        Edit Profile
                      </NavLink>
                      <NavLink
                        to="/settings"
                        className="additionalSettingsNavigation"
                      >
                        Settings
                      </NavLink>
                      <button className="additionalSettingsNavigation">
                        Log Out
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <MainButton
                text={"sign in"}
                dark={true}
                className="headerMainButton"
                handleClick={handleNavigateToLogin}
              />
            )}
          </div>
          <button className="btn sidebar-btn" onClick={openMobileNavBar}>
            <img className="sideBarOpen" src={sideBarOpen} alt="mobile-btn" />
          </button>
        </section>
        {/*<MobileHeader displayNavbar={displayNavbar} />*/}
        <section
          ref={mobileNavBar}
          className={`mobile-navbar mobile-navbar-container ${
            displayNavbar ? "display" : ""
          }`}
        >
          <div className="mobileCloseBtnContainer">
            <button onClick={closeMobileNavBar}>
              <img className="sideBarClose" src={MobileBtn} alt="mobileClose" />
            </button>
          </div>
          <div className="mobile-navbar-area">
            <ul className="mobile-area-menu">
              <li className="mobile-item-spacing">
                <NavLink to="/about">ABOUT</NavLink>
              </li>
              <li className="mobile-item-spacing">
                <NavLink to="/gmga">GMGA</NavLink>
              </li>
              {user && (
                <>
                  <li className="mobile-item-spacing">
                    <NavLink to="/editprofile">EDIT PROFILE</NavLink>
                  </li>
                  <li className="mobile-item-spacing">
                    <NavLink to="/settings">SETTINGS</NavLink>
                  </li>
                </>
              )}
              <li>
                <NavLink to="/language">
                  <img src={HeaderLanguage} alt="header-language" />
                </NavLink>
              </li>
              <div className="mobileUserLoginHeaderContainer">
                <MainButton
                  text={user ? "forum" : "sign in"}
                  dark={true}
                  className="mobileHeaderMainButton"
                  onClick={!user && handleNavigateToLogin}
                />
              </div>
            </ul>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
