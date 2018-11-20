import React from 'react';

const Leftbar = () => {
    return (
        <div className="col-sm-2">
            <h2>leftbar</h2>
        </div>
    )
}

function mapStateToProps(state){
    return {
        isAuthenticated :!! state.users.email   
    }
}

export default Leftbar; 