import React from 'react';
import { Switch , Route , Link } from 'react-router-dom';
import UserRoute from '../components/routes/UserRoute';
import LeftBar from './dashbord/leftbar';
import RightBar from './dashbord/rightbar';
import '../styles/dashbord.css';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import { client , orders  } from '../api';


const mapDispatchToProps = () => dispatch => ({
    getClient  :  dispatch => {},
    getClients :  dispatch => {},
    logout
})

class Dashbord extends React.Component {
    logoutCall = () => {
        this.props.logout(()=> {
            this.props.history.push('/')
        })
    }
    render(){
        return (
            <div className="container">
                <div id="dashbord">
                    <div className="row">
                        <div className="col-sm-3">
                            <LeftBar user={this.props.user}/>
                        </div>
                        <div className="col-sm-9">
                            <RightBar/>
                        </div>
                    
                    <br/>
                    <button onClick={this.logoutCall}>Logout</button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user : state.users,
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Dashbord)