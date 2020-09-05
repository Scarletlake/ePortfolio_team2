import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
  component: Component
}) => {
  const isAuthenticated = localStorage.getItem('token');

  return (
    <Route
    render={props => isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to="/user/signin" />
      )
    }
  />
  );
}
  
export default PrivateRoute;
