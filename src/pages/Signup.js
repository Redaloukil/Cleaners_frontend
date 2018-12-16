import React from 'react';
import SignupForm from '../components/forms/SignupForm';
import { signup } from '../actions/auth';
import { connect } from 'react-redux';
import '../styles/login_signup.css';

class Signup extends React.Component {
    submit = (username , email , phone_number , password) => {
        this.props.signup(username, email , phone_number , password,() =>{
            this.props.history.push(username, email ,phone_number, password);
        })
    }
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="left-side col-sm-5">
                        
                    </div>
                    <div className="right-side col-sm-7">
                        <div className="container">
                            <SignupForm submit={this.submit}/>
                        </div>
                        
                    </div>
                </div>
            </div>
        )    
    }
}

export default connect(null , {signup})(Signup);