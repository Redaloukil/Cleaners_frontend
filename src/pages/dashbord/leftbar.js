import React from 'react';
import { connect } from 'react-redux';



const Leftbar = () => {
    return (
        <div className="col-sm-2" id="left">
            <h2>Leftbar</h2>
            <h4></h4>
        </div>
    )
}

function mapStateToProps(state){
    return {
        isAuthenticated :state.users.email   
    }
}

export default connect(mapStateToProps)(Leftbar); 