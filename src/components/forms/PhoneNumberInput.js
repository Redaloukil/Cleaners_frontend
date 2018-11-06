import React from 'react';


const PhoneNumberInput = () => {
    return(
        <div className="form-group">
          <label htmlFor="email">Phone number</label>
          <input
            type="phone_number"
            id="phone_number"
            name="phone_number"
            value={props.phone_number}
            onChange={(text) => this.props.onChange(text)}
            className={
              errors.email ? "form-control is-invalid" : "form-control"
            }
          />
          <div className="invalid-feedback">{errors.email}</div>
</div>
    )
}

export default Signup;