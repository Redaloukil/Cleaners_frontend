import React from 'react';
import SignupForm from '../components/forms/SignupForm';
import { signup } from '../actions/users';
import { connect } from 'react-redux';

class Signup extends React.Component{
    submit = (username , email , phone_number , password) => {
        this.props.signup(username , email , phone_number , password)
    }
    render(){
        return(
            <div>
                {console.log(this.props)}
                <SignupForm submit={this.submit}/>
            </div>
        )    
    }
}

export default connect(null , {signup})(Signup);