import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



const Leftbar = () => {
    return (
        <div className="col-sm-2" id="left">
            <h2>Leftbar</h2>
            <h4></h4>
            <Link to="/dashbord/create">create</Link>
            <Link to="/dashbord/orders">orders</Link>
        </div>
    )
}

function mapStateToProps(state){
    return {
        isAuthenticated :state.users.email   
    }
}

export default connect(mapStateToProps)(Leftbar); 