import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  changePassword,
  setNewPasswordsMathingError,
} from "../features/userSlice";

import MainButton from "./mainButton";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const { passwordChangeNotification, user_id } = useSelector(
    (store) => store.user
  );

  const [passwordChangeData, setPasswordChangeData] = useState({
    oldPassword: "",
    newPassword: "",
    newPasswordConfirm: "",
    user_id: user_id,
  });

  const handlePassWordChangeData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setPasswordChangeData({
      ...passwordChangeData,
      [name]: value,
    });
  };

  const submitPasswordChange = (e) => {
    e.preventDefault();
    if (
      !passwordChangeData.newPassword ||
      !passwordChangeData.newPasswordConfirm ||
      !passwordChangeData.oldPassword
    ) {
      console.log("Password Change");

      dispatch(setNewPasswordsMathingError("Please fill in all fields"));
      return;
    } else if (
      passwordChangeData.newPassword !== passwordChangeData.newPasswordConfirm
    ) {
      dispatch(setNewPasswordsMathingError("Passwords do not mach"));
      return;
    } else {
      dispatch(changePassword(passwordChangeData));
    }
  };

  useEffect(() => {
    if (passwordChangeNotification.success) {
      setPasswordChangeData({
        oldPassword: "",
        newPassword: "",
        newPasswordConfirm: "",
        user_id: user_id,
      });
    }
  }, [passwordChangeNotification]);

  return (
    <section className="changePasswordContainer">
      <h3 className="changePasswordHeader">Change Password</h3>
      <form className="changePasswordForm">
        <label className="changePasswordLabel">
          Current Password:
          <input
            type="password"
            name="oldPassword"
            className="changePasswordInput"
            onChange={handlePassWordChangeData}
          />
        </label>
        <label className="changePasswordLabel">
          New Password:
          <input
            type="password"
            name="newPassword"
            className="changePasswordInput"
            onChange={handlePassWordChangeData}
          />
        </label>
        <label className="changePasswordLabel">
          Confirm New Password:
          <input
            type="password"
            name="newPasswordConfirm"
            className="changePasswordInput"
            onChange={handlePassWordChangeData}
          />
        </label>
        {passwordChangeNotification.text && (
          <p
            className={
              passwordChangeNotification.success
                ? "passwordChangeNotification passwordChangeSuccess"
                : "passwordChangeNotification passwordChangeError"
            }
          >
            {passwordChangeNotification.text}
          </p>
        )}
        <div className="changePasswordSubmitContainer">
          <MainButton
            dark={true}
            fontWeight={"700"}
            fontSize={"13px"}
            text={"change password"}
            handleClick={submitPasswordChange}
          />
        </div>
      </form>
    </section>
  );
};
export default ChangePassword;
