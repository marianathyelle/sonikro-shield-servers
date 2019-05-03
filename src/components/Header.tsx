import * as React from "react";
import Logo from "../assets/logo.png";
import { Button, Nav, NavItem, NavLink } from "reactstrap";
import { UserProfile } from "./UserProfile";
import { API_URL } from "../services";
import { observer } from "mobx-react";
import { Login } from "../stores/Login";
import { ModalComponent } from "../components/ModalComponent";
import { observable } from "mobx";

const QRCode = require('qrcode-react');

@observer
export class Header extends React.Component {
  @observable showModal: boolean = false;
  
  loginStore = new Login();
  
  componentDidMount() {
    this.loginStore.getToken();
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
              this.loginStore.token ? (
                <QRCode 
                  value={this.loginStore.token}
                  size={250}
                />
              ) : <h4>Você não está logado.</h4>
            }
          />
          
          <NavItem className="mr-2">
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

          <NavItem>
            <Button color="info" onClick={this.toggle}>QR Code</Button>
          </NavItem>
        </Nav>
      </div>
    )
  }
}