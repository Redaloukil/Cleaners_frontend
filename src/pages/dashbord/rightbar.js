import React from 'react';
import Sections from './sections';
import Statistics from './statistics';
import DashbordNav from './DashbordNav';
import Profile from './profile';
import './../../styles/right.css';
import { connect } from 'react-redux';

const Rightbar = () => {
    return(
            <div className="col-sm-9" id="right">
                <div className="container">
                <DashbordNav/>
                <Profile/>
                <Statistics/>
                <Sections/>
                </div>
            </div>
        )
}

function mapStateToProps(){
    return {
        
    }   
}

export default connect( mapStateToProps , {})(Rightbar);