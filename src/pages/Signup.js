import React from 'react';
import SignupForm from '../components/forms/SignupForm';
import { login } from '../actions/users';

const Signup = () => {
    this.submit = (username , password) => {
        const user = login(username , password)
        console.log(user);
    }
    return(
        <div>
            <SignupForm submit={this.submit}/>
        </div>
    )
}

export default Signup;