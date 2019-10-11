import React, { Component } from "react";

import { NavLink } from "react-router-dom";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";

class Navi extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">For Monogo :)</Navbar.Brand>
        <Nav className="mr-auto">
          <NavLink className="nav-link text-light" exact to="/">
            Home
          </NavLink>
          <NavLink className="nav-link text-light" exact to="/news">
            News
          </NavLink>

          <NavLink className="nav-link text-light" to="/about">
            About
          </NavLink>
        </Nav>
      </Navbar>
    );
  }
}

export default Navi;
