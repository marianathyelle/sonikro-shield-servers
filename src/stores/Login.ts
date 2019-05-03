import { observable } from 'mobx';
import { API_URL } from "../services";

const queryString = require('query-string');
const store = require('store');
const jwt = require('jsonwebtoken');

export interface TokenParam {
  token: string;
}

export interface Avatar {
  small:  string;
  medium: string;
  large:  string;
}

export interface User {
  steamid:  string;
  username: string;
  profile:  string;
  avatar:   Avatar;
  roles:    string;
  iat:      number;
  exp:      number;
}

export class Login {
  @observable userData?: User;

  public getToken() {
    let urlParams: TokenParam;

    const token = store.get('token')

    if(token) {
      this.userData = jwt.decode(token) as User;
    }

    if(window.location.search.length !== 0) {
      urlParams = queryString.parse(window.location.search) 
      store.set('token', urlParams.token )
      window.location.href = "/";
    }
  }

  public logout = () => {
    store.clearAll();
    window.location.reload();
  }
}