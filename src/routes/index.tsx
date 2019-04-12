import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { Main } from "../pages/Main";

export const Routes = () => (
  <Switch>
    <Route path="/" component={Main} />
  </Switch>
)