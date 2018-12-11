import React from 'react';
import { connect } from 'react-redux';
import './../../styles/profile.css';

const Profile = (props) => {
    {console.log(props)}
    return(
        <div id="profile">
            <div className="container">
                <div className="row">
                    <div class="col-sm-2">
                        <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                    </div>
                    <div class="col-sm-10">
                        <h1>Welcome Again , {props.user.username}</h1>
                        <h2>{props.user.phone_number}</h2>
                        <h3>{props.user.email}</h3>
                    </div>
                </div>
            </div>
        </div>
    )

}

function mapStateToProps(state){
    return {
        user:state.users
    }
}

export default connect(mapStateToProps , {})(Profile);