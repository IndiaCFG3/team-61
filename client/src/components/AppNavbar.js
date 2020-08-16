// were using reactstreap for this
import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";

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
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container></Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
