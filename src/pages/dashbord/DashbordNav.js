import React from 'react';
import { connect } from 'react-redux';
import { logout } from './../../actions/auth';
import history from './../../history';
import './../../styles/right.css';
import { Link  } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
 
const DashbordNav = () => {
        const logoutRequest = () => {
            logout(() => {
                history.push('/');    
            })
        }
        return(
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id="dash-nav">
            
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="#"> Home</Link>
                </li>
                
                
                <li className="nav-item">
                  <Link className="nav-link" to="#"> Pricing</Link>
                </li>
                
              </ul>
            </div>
          </nav>
            <div className="text-right">
                <Button><Link to="">Create An Order</Link></Button>
                <Button><Link to="">View The Orders</Link></Button>
            </div>
            </div>
        )
    
}




export default DashbordNav;