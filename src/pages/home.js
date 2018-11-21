import React from 'react';
import HomeNavbar from '../components/navs/HomeNavbar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { stat } from 'fs';
import '../styles/home.css';



const Home = () => {
    return(
        <header className="app-header">
            <HomeNavbar/>
            <div className="container">
                <h1>Be able to clean your clothers by ordering <strong>Cleaners</strong></h1>
                <Link className="home-link" to="/login">Login</Link> 
            </div>
        </header>
    )
}

function mapStateToProps(state){
    return {
        isAuthenticated :!!state.users.email
    }
}
export default connect(mapStateToProps , {})(Home);