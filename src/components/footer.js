import "../assets/css/index.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
//Below is imitation data for API
// import { contactData } from "../utils/data";
//Assets and Images
import facebookIcon from "../assets/images/facebookIcon.svg";
import phoneIcon from "../assets/images/phoneIcon.svg";
import mailIcon from "../assets/images/mailIcon.svg";
import pinIcon from "../assets/images/pinIcon.svg";
import instagramIcon from "../assets/images/instagramIcon.svg";
const Footer = () => {
  const { email, facebook, phone, instagram, address } = useSelector(
    (store) => store.navBar
  );
  //Object to map for Footer contact information
  const contactData = [
    {
      icon: phoneIcon,
      text: phone,
    },
    {
      icon: mailIcon,
      text: email,
    },
    {
      icon: pinIcon,
      text: address,
    },
    {
      icon: instagramIcon,
      text: instagram,
    },
    {
      icon: facebookIcon,
      text: facebook,
    },
  ];
  return (
    <footer className="footer">
      <section className="contactsContainer">
        {contactData.map((contact, index) => {
          const { icon, text } = contact;
          return (
            <a className="singleContact" key={index} href="#">
              <div className="iconContainer">
                <img src={icon} alt="Contact Icon" />
              </div>
              <p className="singleContactLabel">{text}</p>
            </a>
          );
        })}
      </section>
      {/* Container for navigation inside site */}
      <section className="additionalInfoContainer">
        <Link to={"#"} className="infoLabel">
          Privacy policy
        </Link>
        <Link to={"#"} className="infoLabel">
          Terms & Conditions
        </Link>
      </section>
    </footer>
  );
};
export default Footer;
