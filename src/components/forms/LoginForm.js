import React from 'react';
import {users} from '../../api';
import { isEmail } from 'validator';
import { Link } from 'react-router-dom';
import { login } from '../../actions/aut';
import { Redirect } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props){
        super(props)
    }
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
            this.props.submit(this.state.data.username , this.state.data.password)
            
        }
      };
    
    validate = data => {
        const errors = {};
        if (!(data.username)) errors.username = "Invalid phone number";
        if (!data.password) errors.password = "Can't be blank";
        
        return errors;
    };  
    
    render(){
        const {data , errors , loading } = this.state
        return(
            <form onSubmit={this.onSubmit}>
                
                <div className="form-group">
                    <label htmlFor="username">Phone number</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={data.username}
                        onChange={this.onChange}
                        className={
                                errors.username ? "form-control is-invalid" : "form-control"
                        }
                    />
                    <div className="invalid-feedback">{errors.username}</div>
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
                    Login
                </button>
            </form>
        )
    }
}


export default LoginForm;