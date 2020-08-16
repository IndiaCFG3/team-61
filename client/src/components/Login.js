// // were using reactstreap for this
// import React, { Component } from "react";
// import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
// // import {
// //   Collapse,
// //   Navbar,
// //   NavbarToggler,
// //   NavbarBrand,
// //   Nav,
// //   NavItem,
// //   NavLink,
// //   Container,
// // } from "reactstrap";

// class Login extends Component {
//   state = {
//     isOpen: false,
//   };
//   toggle = () => {
//     this.setState({
//       isOpen: !this.state.isOpen,
//     });
//   };
//    render() {
//     //render our navbar
//     return (
//         <MDBContainer>
//         <MDBRow>
//           <MDBCol md="6">
//             <form>
//               <p className="h5 text-center mb-4">Sign in</p>
//               <div className="grey-text">
//                 <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
//                   success="right" />
//                 <MDBInput label="Type your password" icon="lock" group type="password" validate />
//               </div>
//               <div className="text-center">
//                 <MDBBtn>Login</MDBBtn>
//               </div>
//             </form>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//     );
//   }
// }

// export default Login;

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
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
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