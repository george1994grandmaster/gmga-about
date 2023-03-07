import deactivationImage from "../assets/images/deactivationImage.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const DeactivationFinished = () => {
  const navigate = useNavigate();

  // This is function to redirect to home page after 3 seconds
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, [navigate]);

  return (
    <section className="deacivationFinishedContainer">
      <h3>Sad to see you go</h3>
      <img
        src={deactivationImage}
        alt="Deactivation Finished"
        className="deacivationFinishedImage"
      />
      <div className="deactivationGoodbyeContainer">
        <p>see you in the mountains...</p>
      </div>
    </section>
  );
};
export default DeactivationFinished;
