import * as React from "react";
import Logo from "../assets/logo.png";
import { Button, Nav, NavItem, NavLink } from "reactstrap";
import { UserProfile } from "./UserProfile";
import { API_URL } from "../services";
import { observer } from "mobx-react";
import { Login } from "../stores/Login";

@observer
export class Header extends React.Component {

  loginStore = new Login();
  
  componentDidMount() {
    this.loginStore.getToken();
  }


  render() {
    return (
      <div className="header d-flex justify-content-between align-items-center">
        <div>
          <img src={Logo} className="logo img-fuid" />
        </div>

        <Nav>
          <div className="d-flex align-items-center">
            <NavItem>
              <NavLink href="#">Users</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#">Servers</NavLink>
            </NavItem>
          </div>

          <div className="separator"/>
          
          <NavItem>
            {this.loginStore.userData ? (
              <div className="d-flex align-items-center">
                <UserProfile avatar={this.loginStore.userData.avatar.medium} username={this.loginStore.userData.username} />
                <Button onClick={this.loginStore.logout} color="danger">Logout</Button>
              </div>
            ) : (
              <NavLink href={`${API_URL}/auth/authenticate`} className="login-btn">
                Steam Login
              </NavLink>
            )}
          </NavItem>
        </Nav>
      </div>
    )
  }
}