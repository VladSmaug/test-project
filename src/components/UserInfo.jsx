import React from "react";

import photo from "../img/Topbar/Photo.svg";

const UserInfo = () => {
  {
    /*for interactive users info 

    const [userName, setUserName] = useState("");
    const [userSurname, setUserSurname] = useState("");*/
  }
  return (
    <div className="userinfo_wrapper">
      <div className="user_input">
        <div className="user_input_btns">
          <button type="button" disabled className="call_btn">
            Video Call
          </button>
          <button type="button" className="auth_btn">
            Authorized Persons
          </button>
          <button type="button" className="info_btn">
            User Information
          </button>
        </div>
        <div className="user_input_inputs">
          <div className="input_wrap">
            <input
              required
              type="text"
              id="Surname"
              // onBlur={(event) => setUserSurname(event.target.value)}
            />
            <label htmlFor="name">Surname</label>
          </div>
          <div className="input_wrap">
            <input
              required
              type="text"
              id="Name"
              // onBlur={(event) => setUserName(event.target.value)}
            />
            <label htmlFor="Name">Name</label>
          </div>
          <div className="input_wrap">
            <input required type="email" id="email" />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input_wrap">
            <input
              required
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
            />
            <label htmlFor="phone">Phone</label>
          </div>
          <div className="input_wrap">
            <input required type="number" id="ID" />
            <label htmlFor="ID">ID number</label>
          </div>
          <div className="input_wrap">
            <input required type="number" id="licence" />
            <label htmlFor="licence">Licence number</label>
          </div>
        </div>
      </div>
      <div className="user_profile">
        <img className="users_pic" src={photo} alt="users_pic" />
        <button type="button" className="edit_btn">
          Edit
        </button>
        <div className="user_data">
          <h2>
            Albert Flores
            {/*for interactive users info
             {userName} {userSurname} */}
          </h2>
          <div className="other_info">
            <div className="reg_date">
              <div>21.01.2021</div>
              <div>Registration date:</div>
            </div>
            <div className="order_amount">
              <div>5</div>
              <div>Amount of orders:</div>
            </div>
          </div>
        </div>
        <button className="block_btn">Block user</button>
      </div>
    </div>
  );
};

export default UserInfo;
