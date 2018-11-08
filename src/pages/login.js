import React from 'react';
import {users} from '../api';
import { isEmail , isMobilePhone} from 'validator';
import { Link } from 'react-router-dom';
import { login } from '../actions/users';

class Login extends React.Component {
    state = {
        data : {
            username : '',
            password : '',
        },
        errors : {

        },
        loading : false,
    }
    onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
    
    onSubmit = e => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
          this.setState({ loading: true });
            
          login(this.state.data.username , this.state.data.password)
        }
      };
    
    validate = data => {
        const errors = {};
        if (!isMobilePhone(data.phone_number)) errors.phone_number = "Invalid phone number";
        if (!data.password) errors.password = "Can't be blank";
        
        return errors;
    };  
    
    render(){
        const {data , errors , loading } = this.state
        return(
            <form onSubmit={this.onSubmit}>
                
                <div className="form-group">
                    <label htmlFor="username">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={data.email}
                        onChange={this.onChange}
                        className={
                                errors.email ? "form-control is-invalid" : "form-control"
                        }
                    />
                    <div className="invalid-feedback">{errors.email}</div>
                </div>
                
                
                <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                        type="password"
                        id="password"
                        name="password"
                        value={data.password}
                        onChange={this.onChange}
                        className={
                            errors.password ? "form-control is-invalid" : "form-control"
                        }
                        />
                        <div className="invalid-feedback">{errors.password}</div>
                </div>
                
                <button type="submit" className="btn btn-primary btn-block">
                    Signup
                </button>
                <small className="form-text text-center">
                        or <Link to="/login">Login</Link> if you have an account
                </small>
            </form>
        )
    }
}


export default Login;