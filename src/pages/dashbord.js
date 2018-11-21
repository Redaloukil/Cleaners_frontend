import React from 'react';
import { Switch , Route , Link } from 'react-router-dom';
import UserRoute from '../components/routes/UserRoute';
import LeftBar from './dashbord/leftbar';
import RightBar from './dashbord/rightbar';
import '../styles/dashbord.css';


class Dashbord extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <div className="row ">
                    <LeftBar/>
                    <RightBar/>
                </div>
            </div>
        )
    }
}

export default Dashbord;