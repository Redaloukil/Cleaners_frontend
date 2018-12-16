import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';
import { users } from '../api';
import { login } from '../actions/auth';
import '../styles/login_signup.css';

class Login extends React.Component {
    submit = (username , password ) => {
        this.props.login(username , password , () => {
            this.props.history.push('/dashbord');
        })
    }
    render(){
        return(
            <main className="">
            
            <div className="login_signup">
            <div className="container-fluid">
            <div className="row">
                <div className="left-side col-sm-5">
                        
                </div>
                <div className="right-side col-sm-7">
                    
                    <div className="container-fluid">
                        <div className="row">
                            
                            <div className="container">
                            <LoginForm submit={this.submit}/>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
            </div>
            
            
            </main>
        )
    }
    
}

// function mapStateToProps(state){
//     error:form.error.login
// }

export default connect(null , {login})(Login);