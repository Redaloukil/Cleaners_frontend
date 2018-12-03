import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import '../../styles/navbar.css';


const Homenavbar = ({ isAuthenticated : isAuthenticated }) => {
    
    return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
            <img className="navbar-brand" src={logo} width="50px"/>
            <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/signup">Create an account</Link>
                </li> 
                
                
            </ul>
                
            </div> 
            </div>
        </nav>
    )
}

function mapStateToProps(state){
    return {
        isAuthenticated : !!state.users.email
    }
}

export default connect(mapStateToProps)(Homenavbar);