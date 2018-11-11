import React from 'react'
import { Route } from 'react-router-dom';
import { connect } from 'redux';
import Login from '../../pages/Login';

const UserRouter = (props) => {

}

mapStateToProps(){
    isAuthenticated : !!state.user.email
}

export default connect(null , mapStateToProps)(UserRouter);