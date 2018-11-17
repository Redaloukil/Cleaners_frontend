import React from 'react';
import HomeNavbar from '../components/navs/HomeNavbar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = () => {
    return(
        <header className="">
            <HomeNavbar/>
            <h1>Be able to clean your clothers by ordering <strong>Cleaners</strong></h1>
            <Link to="/login">Login</Link>
            <br/>
            <Link to="/signup">Signup</Link>
        </header>
    )
}
function mapStateToProps(state){
    
    return {
        
    }
}
export default connect(null , mapStateToProps)(Home);