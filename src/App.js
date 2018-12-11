import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import PropTypes from "prop-types";
import Home from './pages/home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashbord from './pages/dashbord';
import Orders from './pages/Orders';
import { Route , Switch } from 'react-router-dom';
import GuestRoute from './components/routes/GuestRoute';
import UserRoute from './components/routes/UserRoute';


class App extends React.Component {
  componentWillMount(){

  }
  render() {
    const { isAuthenticated , location } = this.props
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
          <UserRoute
            location={location}
            path="/dashbord/"
            exact
            component={Dashbord}
          />
          <UserRoute
            location={location}
            path="/dashbord/create/"
            exact
            component={Dashbord}
          />
          <UserRoute
            location={location}
            path="/dashbord/orders/"
            exact
            component={Dashbord}
          />
      </Switch>
    </div>
     
    )
  }
}

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};


function mapStateToProps(state){
    return {
      isAuthenticated :!!state.users.email,
    }
}

export default connect(mapStateToProps , {})(App);
