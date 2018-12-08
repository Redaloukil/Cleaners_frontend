import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../styles/left.css'



const Leftbar = (props) => {
    return (
        <div className="col-sm-2"id="left">
            <h2>Cleaners</h2>
            <p>this is cleaners dashbord</p>
            <div class="nav flex-column nav-pills" id="v-pills-tab dashbord-sections-list" role="tablist" aria-orientation="vertical">
                <Link className="nav-link dash-link" id="v-pills-home-tab" data-toggle="pill" to="/acceuil" role="tab" aria-controls="v-pills-home" aria-selected="true"><i class="fa fa-home" aria-hidden="true"></i> Acceuil</Link>
                <Link className="nav-link dash-link" id="v-pills-profile-tab" data-toggle="pill" to="/orders" role="tab" aria-controls="v-pills-profile" aria-selected="false"><i class="fa fa-calendar-plus-o" aria-hidden="true"></i> Orders</Link>
                <Link className="nav-link dash-link" id="v-pills-messages-tab" data-toggle="pill" to="" role="tab" aria-controls="v-pills-messages" aria-selected="false"><i class="fa fa-id-card-o" aria-hidden="true"></i> Services</Link>
                <Link className="nav-link dash-link" id="v-pills-settings-tab" data-toggle="pill" to="" role="tab" aria-controls="v-pills-settings" aria-selected="false"><i class="fa fa-phone" aria-hidden="true"></i> Schedule an order</Link>
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