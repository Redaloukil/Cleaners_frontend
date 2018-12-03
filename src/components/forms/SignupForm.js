import React from 'react';
import { isEmail , isMobilePhone } from 'validator';
import { Link } from 'react-router-dom';


class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.validate = this.validate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    state = {
        data : {
            username : '',
            email : '' , 
            phone_number : '',
            password : '',
            confirm_password : ''
        },
        errors : {},
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
          this.props.submit(this.state.data.username , this.state.data.email , this.state.data.phone_number , this.state.data.password)
        }
      };
    
    validate = data => {
        const errors = {};
        if (!isEmail(data.email)) errors.email = "Invalid email";
        if (!isMobilePhone(data.phone_number)) errors.phone_number = "Invalid phone number";
        if (!data.password) errors.password = "Can't be blank";
        if (!data.username) errors.username = "Can't be blank";
        
        return errors;
    };  
    render(){
        const {data , errors , loading } = this.state
        return(
            <form onSubmit={this.onSubmit}>
                <h2 className="login_signup_title ">Thanks , for your trust !</h2>
                <br/>
                <p className="login_signup_desc">Please enter your phone number and password ,you need to enter this informations</p>
                <div className="form-section">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
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
                        <label htmlFor="phone_number">Phone number</label>
                        <input
                            type="phone_number"
                            id="phone_number"
                            name="phone_number"
                            value={data.phone_number}
                            onChange={this.onChange}
                            className={
                                    errors.phone_number ? "form-control is-invalid" : "form-control"
                            }
                        />
                        <div className="invalid-feedback">{errors.phone_number}</div>
                    </div>
                
                <div className="form-group">
                    <label htmlFor="username">Username</label>
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
                <div className="form-group">
                        <label htmlFor="password">Confirm password</label>
                        <input
                        type="password"
                        id="confirm_password"
                        name="confirm_password"
                        value={data.confirm_password}
                        onChange={this.onChange}
                        className={
                            errors.password ? "form-control is-invalid" : "form-control"
                        }
                        />
                        <div className="invalid-feedback">{errors.password}</div>
                </div>
                </div>
                <div className="form-section">

                <button type="submit" className="btn btn-primary btn-block">
                    Signup
                </button>
                </div>
                <small className="form-text text-center">
                        or <Link to="/login">Login</Link> if you have an account
                </small>
            </form>
        )
    }
}

export default SignupForm;