import React from "react";
import { Route, Redirect } from "react-router-dom";



//This component is used to protect routes from users not logged in
const ProtectedRoutes = ({isAuthenticated, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default ProtectedRoutes;