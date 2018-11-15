import React from 'react';
import { Switch , Route } from 'react-router-dom';
import UserRoute from '../components/routes/UserRoute';
import Orders from './dashbord/Orders';
import CreateOrders from '../pages/dashbord/CreateOrders';


class Dashbord extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Switch>
                    <UserRoute path="/orders" component={Orders}/>
                    <UserRoute path="/create" component={CreateOrders}/>
                </Switch>
            </div>
        )
    }
}

export default Dashbord;