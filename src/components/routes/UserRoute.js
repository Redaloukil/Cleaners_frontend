import React from 'react'
import { Route , Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from '../../pages/Login';

const UserRoute = ({isAuthenticated : isAuthenticated  , component:Component , ...rest}) => {
    return(
        <Route
            {...rest}
            render={props =>
            isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
            }
        />
    )    
}


function mapStateToProps(state) {
    return {
      isAuthenticated: !!state.users.email
    };
  }
  
export default connect(mapStateToProps)(UserRoute);