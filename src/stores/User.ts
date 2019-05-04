import { observable } from 'mobx';

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

export class User {
  @observable userData?: User;
  @observable token: string = store.get('token');

  public getToken() {
    let urlParams: TokenParam;

    this.token = store.get('token')

    if(this.token) {
      this.userData = jwt.decode(this.token) as User;
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