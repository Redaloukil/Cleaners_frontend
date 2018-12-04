import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../styles/left.css'



const Leftbar = (props) => {
    return (
        <div class="col-sm-2"id="left">
            <h2>Cleaners</h2>
            <p></p>
            <div class="nav flex-column nav-pills" id="v-pills-tab dashbord-sections-list" role="tablist" aria-orientation="vertical">
                <Link className="nav-link" id="v-pills-home-tab" data-toggle="pill" to="/acceuil" role="tab" aria-controls="v-pills-home" aria-selected="true">Acceuil</Link>
                <Link className="nav-link" id="v-pills-profile-tab" data-toggle="pill" to="/orders" role="tab" aria-controls="v-pills-profile" aria-selected="false">Orders</Link>
                <Link className="nav-link" id="v-pills-messages-tab" data-toggle="pill" to="" role="tab" aria-controls="v-pills-messages" aria-selected="false">Services</Link>
                <Link className="nav-link" id="v-pills-settings-tab" data-toggle="pill" to="" role="tab" aria-controls="v-pills-settings" aria-selected="false"></Link>
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return {
        isAuthenticated :state.users.email   
    }
}

export default connect(mapStateToProps)(Leftbar); 