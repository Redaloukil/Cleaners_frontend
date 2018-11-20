import React from 'react';

class CreateOrders extends React.Component{
    state = {
        data : {
            date :"" , 
            option :"",
        },
        errors : {}
    }

    submit = () => {
        
    }
    
    validate = () => {

    }

    render(){
        return(
            <div>
                <form submit={this.submit}>
                    Orders Create
                </form>
            </div>
        )
        
    }
}

export default CreateOrders;