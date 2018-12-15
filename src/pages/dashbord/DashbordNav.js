import React from 'react';
import { connect } from 'react-redux';
import { logout } from './../../actions/auth';
import history from './../../history';

 
const DashbordNav = () => {
        const logoutRequest = () => {
            logout(() => {
                history.push('/');    
            })
        }
        return(
            <div>
                <button onClick={logoutRequest}>Logout</button>
            </div>
        )
    
}




export default DashbordNav;