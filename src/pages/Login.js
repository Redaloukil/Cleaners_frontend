import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import { login } from '../actions/users';

const Login = () => {
    function submit(username , password){
        login(username , password)
        
    }
    return(
        <div>
            <LoginForm submit={submit}/>
        </div>
    )
}

export default Login;