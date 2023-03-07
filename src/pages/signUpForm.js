
import { NavLink } from "react-router-dom";
import { useState } from "react";
import formCloseBtn from "../assets/images/formCloseIcon.svg";

const SignUp = () => {

  const [contactInfo, setContactInfo] = useState({
		user: "",
		password: "",
	});

  const [records, setRecords] = useState([]);

  const handleFormInfo = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setContactInfo({...contactInfo, [name]: value});
	}

  /*const saveLoginInfo = (e) => {
		e.preventDefault();
		const newRecord = {...contactInfo, id: new Date().getTime().toString()};
		setRecords([...records, newRecord]);
		console.log(records);
	}*/


  return (
    <div className="formRegisterWrap">
      <div className="container">
        <div className="registerFormContainer">
          <div className="registerFormCenter">
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <NavLink to="/loginForm" className="btn signBtn text">LOG IN</NavLink>
              <button className="btn formCloseBtn">
                <img src={formCloseBtn} alt="formCloseicon"/>
              </button>
            </div>
            <div className="formRegisterContent">
              <h3 className="primary registerTitle title">SIGN UP</h3>
              <p className="text registerText primary">Verification Link will be sent to you via email</p>
              <form action="" /*onSubmit={saveLoginInfo}*/>
                <div className="registerFormFlexible">
                  <div className="registerCol">
                    <input type="text" placeholder="FULLNAME" onChange={handleFormInfo}/>
                  </div>
                  <div className="registerCol">
                    <input type="email" placeholder="EMAIL" onChange={handleFormInfo}/>
                  </div>
                  <div className="registerCol sbmCol">
                    <input type="submit" value="SIGN UP"/>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp;