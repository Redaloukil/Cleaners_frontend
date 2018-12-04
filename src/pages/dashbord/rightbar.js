import React from 'react';
import Sections from './sections';
import Statistics from './statistics';
import DashbordNav from './DashbordNav';

class Rightbar extends React.Component {
    
    render (){

        return(
            <div>
                <DashbordNav/>
                <h2>Welcome Again , User name</h2>

                <Statistics/>
                <Sections/>
            </div>
        )
    }
        
}

export default Rightbar;