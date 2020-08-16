import React from "react";
import loginImg from "../login.svg";
import "./SignUp.scss";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">
        <br/><h4>Register for being a member</h4>
        </div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="number">Phone Number</label>
              <input type="text" name="email" placeholder="Enter Phone Number here" />
            </div>
            <div className="form-group">
              <label htmlFor="number">Password(OTP)</label>
              <input type="text" name="OTP" placeholder="Enter OTP here" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Register and proceed to payment
          </button>
        </div>
      </div>
    );
  }
}
