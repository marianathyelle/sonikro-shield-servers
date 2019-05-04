import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import { Header } from "./components/Header";
import { Provider } from 'mobx-react';
import Stores from "./stores";

class App extends Component {
  render() {
    return (
      <Provider {...Stores}>
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
