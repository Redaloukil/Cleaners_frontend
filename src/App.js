import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import { Route} from 'react-router-dom';
import GuestRoute from './components/routes/GuestRoute';
import UserRoute from './components/routes/UserRoute';



class App extends Component {

  render() {
    return (
      <main>
        <Route exact path="/" exact component={Home}/>
        <GuestRoute exact path="/login" component={Login}/>
        <GuestRoute exact path="/signup" component={Signup}/>
      </main>
    );
  }
}



export default App;
