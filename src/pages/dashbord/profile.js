import React from 'react';


const Profile = (props) => {
    return(
        <div className="container-fluid">
            <div className="row">
                <div class="col-sm-2">
                </div>
                <div class="col-sm-10">
                    <h2>Welcome Again {props.username}</h2>
                    <p></p>
                </div>
            </div>
        </div>
    )

}

export default Profile;