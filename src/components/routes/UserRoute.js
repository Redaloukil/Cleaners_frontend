import React from 'react'
import { Route } from 'react-router-dom';
import Login from '../../pages/login';

const UserRouter = (props) => {
    return (
        <Route component={Login}/>
    )
}

export default UserRouter;