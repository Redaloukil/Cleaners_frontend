import React from 'react';
import {Route , Router , Switch} from 'react-router-dom';
import Create from './createOrder';
import UserRoute from '../../components/routes/UserRoute';


class Rightbar extends React.Component {
    
    render (){

        return(
            <Route 
                path="create/"
                component={Create}
            />
            
            
                
            
        )
    }
        
}

export default Rightbar;