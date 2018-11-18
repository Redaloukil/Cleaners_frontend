import React from 'react';
import HomeNavbar from '../components/navs/HomeNavbar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { stat } from 'fs';

const Home = () => {
    return(
        <header className="app-header">
            <HomeNavbar/>
            <h1>Be able to clean your clothers by ordering <strong>Cleaners</strong></h1>
            <Link to="/login">Login</Link> : <Link to="">Link</Link>
            </header>
    )
}
function mapStateToProps(state){
    
    return {
        isAuthenticated :!!state.email
    }
}
export default connect(mapStateToProps , {})(Home);