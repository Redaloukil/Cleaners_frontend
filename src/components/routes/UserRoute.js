import React from 'react'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from '../../pages/Login';

const UserRouter = ({isAuthenticated : isAuthenticated  , component:Component , ...rest}) => {
    
}

function mapStateToProps(state){
    return {
            isAuthenticated : !!state.user.email
        }
}
export default connect(null , mapStateToProps)(UserRouter);