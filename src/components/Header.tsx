import * as React from "react";
import Logo from "../assets/logo.png";
import { Button, Nav, NavItem, NavLink } from "reactstrap";

export const Header = () => (
  <div className="header d-flex justify-content-between align-items-center">
    <div>
      <img src={Logo} className="logo img-fuid" />
    </div>

    <Nav>
      <NavItem>
        <NavLink href="#">Users</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Servers</NavLink>
      </NavItem>
      <div className="separator"/>
      <NavItem>
        <Button className="steam-btn">Steam login</Button>
      </NavItem>
    </Nav>
  </div>
)