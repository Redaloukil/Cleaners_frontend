import React from 'react';
import {connect} from 'redux';
import { Route  , Redirect} from 'react-router-dom';

const GuestRoute = ({isAuthenticated : isAuthenticated , component : Component , ...rest }) => {
    return (
      <Route
      {...rest}
      render={props =>
          !isAuthenticated ? (
            <Component {...props} />
          ):(
          <Redirect to="/dashboard" />
        )}
      />
    );
   
}



export default GuestRoute;