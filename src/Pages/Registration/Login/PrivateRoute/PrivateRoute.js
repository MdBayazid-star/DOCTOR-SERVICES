import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route, useHistory } from "react-router";
import useAuth from "../../../../Hooks/useAuth";

const PrivetRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center my-5">
        <Spinner animation="border" variant="primary" className="me-3" />
        <Spinner animation="border" variant="primary" className="me-3" />
        <Spinner animation="border" variant="primary" className="me-3" />
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signup",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivetRoute;
