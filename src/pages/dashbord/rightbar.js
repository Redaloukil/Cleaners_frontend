import React from 'react';
import Sections from './sections';
import Statistics from './statistics';
import DashbordNav from './DashbordNav';
import './../../styles/right.css';


const Rightbar = () => {
    return(
            <div className="col-sm-10" id="right">
                <DashbordNav/>
                <h2>Welcome Again , User name</h2>
                <Statistics/>
                <Sections/>
            </div>
        )
}

export default Rightbar;