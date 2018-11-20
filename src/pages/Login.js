import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import { connect } from 'react-redux';
import { users } from '../api';
import { login } from '../actions/users';

class Login extends React.Component {
    submit = (username , password ) => {
        this.props.login(username , password , {}).then(()=> {
            this.props.history.push('/dashbord')
        })
        
    }
    render(){
        return(
            <div className="container">
                <LoginForm submit={this.submit}/>
            </div>
        )
    }
    
}

export default connect(null , {login})(Login);