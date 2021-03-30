import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

class Navi extends Component {
  render() {
    return (
      <>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
            <Link to="/">yNs Web Design</Link>
          </NavbarBrand>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/blog">Yazılarım</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/about">Hakkımda</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/contact">İletişim</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </>
    );
  }
}

export default Navi;
