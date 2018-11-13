import React from 'react'
import { Route , Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from '../../pages/Login';

const UserRouter = ({isAuthenticated : isAuthenticated  , component:Component , ...rest}) => {
    return(
        <Route
            {...rest}
            render={props =>
            isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
            }
        />
    )    
}


export default UserRouter;