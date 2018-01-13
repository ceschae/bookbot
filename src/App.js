import React, { Component } from 'react';
import './App.css';
import constants from "./components/constants";

import SignInView from "./components/SignIn";
import SignUpView from "./components/SignUp";
import Home from "./components/Home";
import ProfileView from './components/Profile';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import { HashRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currUser: null
    }
  }

  componentWillMount() {
    this.authUnsub = firebase.auth().onAuthStateChanged(user => {
        this.setState({currUser: user});
    });
  }

  componentWillUnmount() {
    this.authUnsub();
  }

  render() {
    return (
      <Router> 
        <div className="App">
          <div className="jumbotron">
            <h1 className="display-4">Welcome to Book Bot</h1>
            <p className="lead">Your Very Own Tech Ghostwriter</p>
            <hr className="my-4"/>
          </div>
          <Link to={constants.routes.profile} className="nav-link">Profile</Link>
          <div className="container">
            <div className="row">
           
              <Switch>
                <Route exact path={constants.routes.signin} component={SignInView} />
                <Route path={constants.routes.signup} component={SignUpView} />
                <Route path={constants.routes.about} component={Home} />
                <Route component={Home} />
              </Switch>
           
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
