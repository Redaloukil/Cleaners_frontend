import React from 'react';

import UserRoute from '../components/routes/UserRoute';
import LeftBar from './dashbord/leftbar';
import RightBar from './dashbord/rightbar';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import { client , orders  } from '../api';
import '../styles/dashbord.css';

const mapDispatchToProps = () => dispatch => ({
    
})

class Dashbord extends React.Component {
    render(){
        return (
            <div id="dashbord">
                <div className="container-fluid">
                    <div className="row">
                            <LeftBar user={this.props.user}/>
                            <RightBar/>
                        </div>
                        
                    </div>
            </div>
        
        )
    }
}

function mapStateToProps(state){
    return {
            
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Dashbord)