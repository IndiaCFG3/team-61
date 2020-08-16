import React from "react";
import loginImg from "../login.svg";
import "./SignUp.scss";
import { Card } from "antd";
import { sendOTP } from "./sendOTP";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <div className="base-container" ref={this.props.containerRef}>
      // <div className="header"></div>
      <Card title="User Registration Portal">
        <div className="content">
          {/* <div className="image">
            <img src={loginImg} />
          </div> */}
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Name</label>
              <input
                type="text"
                name="username"
                placeholder="Enter name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Phone Number</label>
              <input
                type="number"
                name="username"
                placeholder="Enter Phone Number"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email(optional)</label>
              <input type="text" name="email" placeholder="Enter email here" />
            </div>
            <div className="form-group">
              <select className="dropdown">
                <option value="Gender">Gender</option>
                <option value="male">Male</option>
                <option value="male">Female</option>
                <option value="male">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input type="number" name="age" placeholder="Enter age here" />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="address"
                name="address"
                placeholder="Enter address here"
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                type="state"
                name="state"
                placeholder="Enter state  here"
              />
            </div>

            <div className="form-group">
              <select className="dropdown">
                <option value="Income">Income</option>
                <option value="less than 1 lakh">less than 1 Lakh</option>
                <option value="between 1 to 2 lakh">between 1 to 2 lakh</option>
                <option value="between 2 to 5 lakh">between 2 to 5 lakh</option>
                <option value="more than 5 lakh">more than 5 lakh</option>
              </select>
            </div>
            <div className="form-group">
              <select className="dropdown">
                <option value="Marital status">Marital status</option>
                <option value="married">Married</option>
                <option value="unmarried">Unmarried</option>
                <option value="divorced">Divorced</option>
                <option value="widow">Widow</option>
              </select>
            </div>
            <div className="form-group">
              <select className="dropdown">
                <option value="Category">Category</option>
                <option value="General">General</option>
                <option value="OBC">OBC</option>
                <option value="SC">SC</option>
                <option value="BC">BC</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <select className="dropdown">
                <option value="Residance">Residance</option>
                <option value="urban">Urban</option>
                <option value="rural">Rural</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="education">Education</label>
              <input
                type="text"
                name="education"
                placeholder="Enter education  here"
              />
            </div>
          </div>
          <div className="footer">
            <button type="button" className="btn" onClick={() => sendOTP()}>
              Register
            </button>
          </div>
        </div>
      </Card>
    );
  }
}
