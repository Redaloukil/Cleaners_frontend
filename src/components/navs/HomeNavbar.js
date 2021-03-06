import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../images/cleaners3.png';
import '../../styles/navbar.css';


const LoginLinks = () => {
    return (
        <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/"><i class="fa fa-home" aria-hidden="true"></i> Home<span className="sr-only">(current)</span></Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link" to="/login"><i class="fa fa-sign-in" aria-hidden="true"></i> Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup"><i class="fa fa-user-plus" aria-hidden="true"></i> Create an account</Link>
                    </li>
        </ul>
    )
}

const AuthenticatedLinks = () => {
    return(
        <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    

                        <Link className="nav-link" to="/"><i class="fa fa-home" aria-hidden="true"></i> Home <span className="sr-only">(current)</span></Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashbord/">dashbord</Link>
                    </li>
        </ul>
    )
}

const Homenavbar = ({ isAuthenticated : isAuthenticated }) => {
    
    return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
            <img className="navbar-brand" src={logo} width="200px"/>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                { isAuthenticated ? <AuthenticatedLinks/> : <LoginLinks/> }
                
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

export default connect(mapStateToProps , {})(Homenavbar);