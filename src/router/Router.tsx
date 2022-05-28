import type { VFC } from "react";
import { memo } from "react";
// import { Route, Routes } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import { Login } from "../components/pages/Login";

export const Router: VFC = memo(() => {
  // Routes is Formerly Switch
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
    </Switch>
  );
});
