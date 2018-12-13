import React from 'react';
import HomeNavbar from '../components/navs/HomeNavbar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { stat } from 'fs';
import '../styles/home.css';



const Home = () => {
    return(
        <div>
        <header className="app-header">
            <HomeNavbar/>
            <div className="container">
                <h1>Cleaning your laudary is our job</h1>
                <p>Though the gravity still dragged at him, his muscles were making great efforts to adjust. After the daily classes he no longer collapsed immediately into bed. Only the nightmares got worse.</p>
                
            </div>
        </header>
        <section>

        </section>
        <section>
        </section>
        </div>
    )
}

function mapStateToProps(state){
    return {
        isAuthenticated :!!state.users.email
    }
}
export default connect(mapStateToProps , {})(Home);