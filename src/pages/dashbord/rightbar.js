import React from 'react';
import Sections from './sections';
import Statistics from './statistics';


class Rightbar extends React.Component {
    
    render (){

        return(
            <div>
                <h2>Right Bar</h2>
                <Statistics/>
                <Sections/>
            </div>
        )
    }
        
}

export default Rightbar;