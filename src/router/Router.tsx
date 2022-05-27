import { memo, VFC } from "react";
import { Route, Routes } from "react-router-dom";

import { Login } from "../components/pages/Login";

export const Router: VFC = memo(() => {
  // Routes is Formerly Switch
  return (
    <Routes>
      <Route exact path="/">
        <Login />
      </Route>
    </Routes>
  );
});
