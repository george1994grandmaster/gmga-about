import ChangePassword from "../components/changePassword";
import SettingsMountainBanner from "../assets/images/settingsMountainBanner.svg";
import VisibilitySelect from "../components/visibilitySelect";
import MainButton from "../components/mainButton";
import { NavLink, Link } from "react-router-dom";
const Settings = () => {
  return (
    <section className="settingsPage">
      <h2 className="settingsPageLabel">Settings</h2>
      <section className="settingsContainer">
        <ChangePassword />
        <div className="mountainBannerContainer">
          <img src={SettingsMountainBanner} alt="Mountains and sun" />
        </div>
        <div className="additionalSettingsContainer">
          <div className="postsPublicitySettings">
            <h4 className="postsVisibilityLabel">Who can see my posts?</h4>
            <VisibilitySelect />
            <MainButton
              dark={true}
              fontWeight={"700"}
              fontSize={"13px"}
              text={"save changes"}
              className={"saveChangesButton"}
            />
          </div>
          <Link to="/deactivate" className="deactivateAccountNavigation">
            DEACTIVATE ACCOUNT
          </Link>
        </div>
      </section>
    </section>
  );
};

export default Settings;
