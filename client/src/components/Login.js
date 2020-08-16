import React from "react";
import loginImg from "../login.svg";
import "./Login.scss";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header"></div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Phone Number</label>
              <input type="text" name="username" placeholder="Enter Phone Number" />
            </div>
            <div className="form-group">
              <label htmlFor="password">OTP</label>
              <input type="password" name="password" placeholder="Enter OTP here" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>
      </div>
    );
  }
}
