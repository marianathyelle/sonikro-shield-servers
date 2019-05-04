import * as React from "react";
import Logo from "../assets/logo.png";
import { Button, Nav, NavItem, NavLink } from "reactstrap";
import { UserProfile } from "./UserProfile";
import { API_URL } from "../services";
import { observer, inject } from "mobx-react";
import { User } from "../stores/User";
import { ModalComponent } from "../components/ModalComponent";
import { observable } from "mobx";

const QRCode = require('qrcode-react');

interface InjectedProps {
  user: User;
}


@inject("user")
@observer
export class Header extends React.Component {
  @observable showModal: boolean = false;
  
  get injected() {
    return this.props as InjectedProps;
  }
  
  componentDidMount() {
    this.injected.user.getToken();
  }

  toggle = () => {
    this.showModal = !this.showModal;
  }

  render() {
    return (
      <div className="header d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img src={Logo} className="logo img-fuid" />
          <h3 className="title">Sonikro Shields</h3>
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

          <ModalComponent 
            toggle={this.toggle} 
            showModal={this.showModal} 
            modalTitle="QR Code para login via App"
            modalBody={
              <QRCode 
                value={this.injected.user.token}
                size={250}
              />
            }
          />
          
          <NavItem className="mr-2">
            {this.injected.user.userData ? (
              <div className="d-flex align-items-center">
                <UserProfile avatar={this.injected.user.userData.avatar.medium} username={this.injected.user.userData.username} />
                <Button onClick={this.injected.user.logout} color="danger">Logout</Button>
              </div>
            ) : (
              <NavLink href={`${API_URL}/auth/authenticate`} className="login-btn">
                Steam Login
              </NavLink>
            )}
          </NavItem>

          {this.injected.user.token && (
            <NavItem>
              <Button color="info" onClick={this.toggle}>QR Code</Button>
            </NavItem>
          )}
        </Nav>
      </div>
    )
  }
}