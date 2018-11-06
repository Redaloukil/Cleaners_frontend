import React from 'react';


class Signup extends React.Component {
    state = {
        data : {
            username : '',
            email : '' , 
            phone_number : '',
            password : '',
            confirm_password : ''
        },
        errors : {
            username : '',
            email : '',
            phone_number : '',
            password : '',
        },
        loading : true,
    }
    render(){
        return(
            <form onSubmit={this.onSubmit}>
                
            </form>
        )
    }
}

export default Signup;