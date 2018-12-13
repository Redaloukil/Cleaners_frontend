import React from 'react';
import {Route , Switch } from 'react-router-dom';
import Create from './createOrder';
import Orders from './ordersList';



class Sections extends React.Component {
    render(){
        return (
            <div id="section">
                <Switch>
                    <Route exact path="/dahsbord/orders/"component={Orders}/>    
                    <Route path="/dashbord/create/"component={Create}/>
                </Switch>
            </div>
        )
    }
}

export default Sections;