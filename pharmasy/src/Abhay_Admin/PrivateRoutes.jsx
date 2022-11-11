import React from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext"; 

const PrivateRoute = ({ exact, path, children, redirectPath = "/" }) => {
  const { isAuth } = React.useContext(AuthContext);

  return isAuth ? (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  ) : (
    <Redirect to={redirectPath} />
  );
};
export { PrivateRoute };
