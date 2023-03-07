import { NavLink } from "react-router-dom";
import HeaderLanguage from "../assets/images/headerLanguage.svg";

function MobileHeader({ displayNavbar }) {
  return (
    <>
      <div className={`mobile-navbar ${displayNavbar ? "display" : "hide"}`}>
        <div className="mobile-navbar-container">
          <div className="mobile-navbar-area">
            <ul className="mobile-area-menu">
              <div className="mobile-item-spacing">
                <li>
                  <NavLink to="/about">ABOUT</NavLink>
                </li>
              </div>
              <div className="mobile-item-spacing">
                <li>
                  <NavLink to="/gmga">GMGA</NavLink>
                </li>
              </div>
              <div className="mobile-item-spacing">
                <li>
                  <NavLink to="/language">
                    <img src={HeaderLanguage} alt="header-language" />
                  </NavLink>
                </li>
              </div>
            </ul>
            <button className="btn primary-btn header-btn-text">SIGN IN</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileHeader;
