import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import isAuthenticated from "../../utils/checkAuthToken";

const PrivateRoute = ({
  component: Component
}) => {

  return (
    <Route
    render={props => isAuthenticated('Authorization') ? (
        <Component {...props} />
      ) : (
        <Redirect to="/user/signin" />
      )
      }
    />
  );
}
  
export default PrivateRoute;
