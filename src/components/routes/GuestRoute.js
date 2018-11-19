import React from 'react';
import {connect} from 'react-redux';
import { Route  , Redirect} from 'react-router-dom';

const GuestRoute = ({isAuthenticated : isAuthenticated , component : Component , ...rest }) => {
  
    return (
      <Route
      {...rest}
      render={props =>
          !isAuthenticated ? (
            <Component {...props} />
          ):(
          <Redirect to="/" />
        )}
      />
    );
}

function mapStatetoProps(state){
    return {
      isAuthenticated:!!state.users.email
    }
}


export default connect(mapStatetoProps)(GuestRoute);