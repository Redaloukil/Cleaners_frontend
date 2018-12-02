import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import { connect } from 'react-redux';
import { users } from '../api';
import { login } from '../actions/auth';
import '../styles/login_signup.css';

class Login extends React.Component {
    submit = (username , password ) => {
        this.props.login(username , password , () => {
            this.props.history.push('/dashbord');       
        });
    }
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="left-side col-sm-4">
                        hello
                    </div>
                    <div className="right-side col-sm-8">
                        <div className="container">
                            <LoginForm submit={this.submit}/>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        )
    }
    
}

export default connect(null , {login})(Login);