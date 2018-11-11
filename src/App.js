import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Home from './pages/home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashbord from './pages/dashbord';
import { Route , Switch } from 'react-router-dom';
import GuestRoute from './components/routes/GuestRoute';
import UserRoute from './components/routes/UserRoute';




class App extends Component {
  componentWillMount(){
    
  }
  render() {
    const { isAutheticated , location } = this.props
    return (
      <div> 
        <Switch>
          <Route 
            location={location} 
            exact 
            path="/" 
            component={Home}
          />
          <GuestRoute
            location={location}
            exact
            path="/login/"
            component={Login}
          />
          <GuestRoute
            location={location}
            
            path="/signup/"
            exact
            component={Signup}
          />
          <GuestRoute
            location={location}
            path="/dashbord/"
            exact
            component={Dashbord}
          />
        </Switch>
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
