import React from 'react';
import Sections from './sections';
import Statistics from './statistics';
import DashbordNav from './DashbordNav';
import Profile from './profile';
import './../../styles/right.css';


const Rightbar = () => {
    return(
            <div className="col-sm-9" id="right">
                <DashbordNav/>
                <Profile/>
                <Statistics/>
                <Sections/>
            </div>
        )
}

export default Rightbar;