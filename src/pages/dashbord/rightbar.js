import React from 'react';
import {Route , Router , Switch , Link} from 'react-router-dom';
import Create from './createOrder';
import Orders from './ordersList';
import UserRoute from '../../components/routes/UserRoute';


class Rightbar extends React.Component {
    
    render (){

        return(
            <div>
                <Switch>
                <Route exact path="/dashbord/orders"component={Orders}/>    
                <Route exact path="/dashbord/create"component={Create}/>
                </Switch>
            </div>
        )
    }
        
}

export default Rightbar;