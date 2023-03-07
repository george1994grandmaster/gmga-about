import "../assets/css/index.scss";
import error404 from "../assets/images/error404.svg";
import MainButton from "../components/mainButton";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };
  return (
    <section className="error">
      <img
        src={error404}
        alt="Error 404"
        // className="deacivationFinishedImage"
      />
      <p className="errorLabel">Page not found</p>
      <p className="errorExplanation">
        SORRY, THE PAGE YOU ARE LOOKING FOR COULD NOT BE FOUND
      </p>
      <MainButton
        fontWeight={"700"}
        fontSize={"13px"}
        text={"back to home"}
        handleClick={navigateHome}
      />
    </section>
  );
};
export default Error;
