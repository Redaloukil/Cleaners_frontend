import React from 'react';
import HomeNavbar from '../components/navs/HomeNavbar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import phone from './../images/apple.png';
import { stat } from 'fs';
import '../styles/home.css';
import { Button } from 'semantic-ui-react';
import Footer from './../components/navs/Footer';



const Home = () => {
    return(
        <div>
        <header className="app-header" id="home">
            <HomeNavbar/>
            <div className="container">
            <div className="row">
                <div className="col-sm-6"> 
                    <div id="home-desc">
                        <h1>Cleaning your laundary is our job</h1>
                        <p>Though the gravity still dragged at him, his muscles were making great efforts to adjust. After the daily classes he no longer collapsed immediately into bed. Only the nightmares got worse.</p>
                        <Button>Link1</Button>
                        <Button>Link2 is here</Button>
                    </div>
                </div>
                <div className="col-sm-6">
                        <img className="navbar-brand" src={phone} width="100%"/>
                </div>
                
            </div>
                
            </div>
        </header>
        <section id="team">
            <div className="container">
            <div className="row">
                <div className="col-sm-5"> 
                    <h1>Cleaner Team is making progress..</h1>
                    <p>Our clients are not only satisfied </p>
                    <br/>
                    <div className="">
                        <h3>hello world</h3>
                        <p>Though the gravity still dragged at him, his muscles were making great efforts to adjust. After the daily classes he no longer collapsed immediately into bed. Only the nightmares got worse</p>
                    </div>
                    <div className="">
                        <h3>hello world</h3>
                        <p>Though the gravity still dragged at him, his muscles were making great efforts to adjust. After the daily classes he no longer collapsed immediately into bed. Only the nightmares got worse</p>
                    </div>
                    <div className="">
                        <h3>hello world</h3>
                        <p>Though the gravity still dragged at him, his muscles were making great efforts to adjust. After the daily classes he no longer collapsed immediately into bed. Only the nightmares got worse</p>
                    </div>
                    <div className="">
                        <h3>hello world</h3>
                        <p>Though the gravity still dragged at him, his muscles were making great efforts to adjust. After the daily classes he no longer collapsed immediately into bed. Only the nightmares got worse</p>
                    </div>
                    
                </div>
                <div className="col-sm-1">
                </div>
                <div className="col-sm-6">
                <img id="team-image" src="https://images.unsplash.com/photo-1527694224012-be005121c774?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" width="100%" height="800px"/>
                </div>  
            </div>
            
            
            
            </div>
        </section>
        <section id="clients">
            <h1>Cleaners Has Honorable Clients</h1>
            <p>Though the gravity still dragged at him, his muscles were making great efforts to adjust</p>
            <div class="container">
                <div className="client">
                    <img/>
                    <h4>Mohamed Reda</h4>
                    <h2>this must be the experience i had with laundary companies</h2>
                </div>
            </div>
        </section>
        <section id="partners">
        </section>
        <Footer/>
        </div>
    )
}

function mapStateToProps(state){
    return {
        isAuthenticated :!!state.users.email
    }
}
export default connect(mapStateToProps , {})(Home);