import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const error404 = () => {
    return(
        <div>
            <h1>Error 404</h1>
            <p>this is a wrong page please return to <Link to='/dashbord'>dashbord</Link></p>
        </div>
    )
}

function mapStateToProps(state){
    return (
        isAuthenticated : state.user
    )
}

export default error404;