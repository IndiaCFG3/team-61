// were using reactstreap for this
import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  
  Container,
} from "reactstrap";
import {Route, HashRouter, NavLink } from "react-router-dom";
import "./AppNavbar.css";
import Login from "./Login";
import SignUp from "./SignUp";
import { BrowserRouter as Router } from "react-router-dom";


class AppNavbar extends Component {
  state = {
    isOpen: false,
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    //render our navbar
    return (
      <div>
        <Router>
          <div className="mynav">
        <Navbar  expand="sm" className="mb-5">
          <Container>
          
           <NavLink className="link" to ="/Login">LOGIN</NavLink>
           <NavLink className="link" to ="/SignUp">SIGNUP</NavLink>
           <NavLink className="link" to ="/about">ABOUT</NavLink>
           <NavLink className="link" to ="/contact">CONTACT US</NavLink>
          </Container>
        </Navbar>
        </div>
          <Route path="/Login" component ={Login} />
          <Route path="/SignUp" component ={SignUp} />
        </Router>
      </div>
    );
  }
}

export default AppNavbar;
