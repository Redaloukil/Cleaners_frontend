import React from 'react';
import { Switch , Route , Link } from 'react-router-dom';
import UserRoute from '../components/routes/UserRoute';
import LeftBar from './dashbord/leftbar';
import RightBar from './dashbord/rightbar';
import '../styles/dashbord.css';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import { client , orders  } from '../api';


// const mapDispatchToProps = () => dispatch => ({
//     getClient  :  dispatch => {},
//     getClients :  dispatch => {},
        
// })

class Dashbord extends React.Component {
    logoutCall = () => {
        this.props.logout(()=> {
            this.props.history.push('/')
        })
    }
    render(){
        return (
            <div>
                <div className="row">
                    <LeftBar/>
                    <RightBar/>
                    <br/>
                    <Link to="dashbord/create/">Create</Link>
                    <button onClick={this.logoutCall}>Logout</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user : state.users.id,
    }
}

export default connect(mapStateToProps , {logout})(Dashbord)