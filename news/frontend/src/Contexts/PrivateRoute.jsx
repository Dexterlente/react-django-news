import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = Cookies.get('sessionid');
  
  return (
    <Route
      {...rest}
      render={(props) => {
        return isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Navigate to="/login" replace />
        );
      }}
    />
  );
}

export default PrivateRoute;
