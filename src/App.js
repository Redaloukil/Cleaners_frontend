import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Dashbord from './pages/dashbord';
import { Route} from 'react-router-dom';
import GuestRoute from './components/routes/GuestRoute';
import UserRoute from './components/routes/UserRoute';




class App extends Component {
  componentWillMount(){

  }
  render() {
    const {isAutheticated , location } = this.props
    return (
      <div>
        <Route 
        location={location} 
        exact path="/" 
        component={Home}
        />
        <GuestRoute
        location={location}
        path="/login"
        exact
        component={Login}
        />
        <GuestRoute
        location={location}
        path="/signup"
        exact
        component={Signup}
        />
      </div>
    )
  }
}

function mapStateToProps(state){
    return {
      isAutheticated :!!state.user.email,
      
    }
    

}

export default connect()(App);
