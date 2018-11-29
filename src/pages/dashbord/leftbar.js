import React from 'react';
import { connect } from 'react-redux';

mapDispatchToProps = dispatch => ({
    getClient : () => {
        
    }
})

const Leftbar = () => {
    return (
        <div className="col-sm-2" id="left">
            <h2>leftbar</h2>
            <h4>{this.props.user.}</h4>
        </div>
    )
}

function mapStateToProps(state){
    return {
        isAuthenticated :state.users.email   
    }
}

export default Leftbar; 