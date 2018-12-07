import React from 'react';
import {Route , Switch } from 'react-router-dom';
import Create from './createOrder';
import Orders from './ordersList';



class Sections extends React.Component {
    render(){
        return (
            <div>
                <Switch>
                    <Route exact path="/dashbord/orders"component={Orders}/>    
                    <Route exact path="/dashbord/create"component={Create}/>
                </Switch>
            </div>
        )
    }
}

export default Sections;