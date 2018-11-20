import React from 'react';
import { Switch , Route , Link } from 'react-router-dom';
import UserRoute from '../components/routes/UserRoute';
import Orders from './Orders';
import CreateOrders from './CreateOrders';


class Dashbord extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h1>Dashbord</h1>
                <br/>
                <Link to="/dashbord/create">Create</Link>
                <br/>
                <Link to="/dashbord/orders">Orders</Link>
            </div>
        )
    }
}

export default Dashbord;