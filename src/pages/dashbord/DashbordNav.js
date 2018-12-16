import React from 'react';
import { connect } from 'react-redux';
import { logout } from './../../actions/auth';
import history from './../../history';
import './../../styles/right.css';

 
const DashbordNav = () => {
        const logoutRequest = () => {
            logout(() => {
                history.push('/');    
            })
        }
        return(
            <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light" id="dash-nav">
            
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#">Home</a>
                </li>
                
                <li class="nav-item">
                  <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Pricing</a>
                </li>
                
              </ul>
            </div>
          </nav>
            </div>
        )
    
}




export default DashbordNav;