import React from 'react';
import SignupForm from '../components/forms/SignupForm';
import { signup } from '../actions/auth';
import { connect } from 'react-redux';

class Signup extends React.Component {
    submit = (username , email , phone_number , password) => {
        this.props.signup(username, email , phone_number , password,() =>{
            this.props.history.push(username, email ,phone_number, password);
        })
    }
    render(){
        return(
            <div className="container">
                <SignupForm submit={this.submit}/>
            </div>
        )    
    }
}

export default connect(null , {signup})(Signup);