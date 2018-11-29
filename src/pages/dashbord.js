import React from 'react';
import { Switch , Route , Link } from 'react-router-dom';
import UserRoute from '../components/routes/UserRoute';
import LeftBar from './dashbord/leftbar';
import RightBar from './dashbord/rightbar';
import '../styles/dashbord.css';
import { connect } from 'react-redux';
import { client , orders  } from '../api';


// const mapDispatchToProps = () => dispatch => ({
//     getClient  :  () => {},
//     getClients :  () => {},    
// })

class Dashbord extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <div className="row">
                    <LeftBar/>
                    <RightBar/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        isAuthenticated : !!state.users.email,
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Dashbord)