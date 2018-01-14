import React, { Component } from 'react';
import './App.css';
import constants from "./components/constants";
import anonUser from './img/anon_user.png';

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

  handleSignIn(evt) {
    evt.preventDefault();
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
    });
  }

  handleSignOut(evt) {
    evt.preventDefault();
    firebase.auth().signOut()
      .catch(err => this.setState({errorMessage: err.message}));
  }

  getFirstName() {
    return this.state.currUser.displayName.split(" ")[0];
  }

  render() {
    let imgStyle = {
      'objectFit': 'cover',
       height:'40px',
       width:'40px'
    }
    return (
      <Router> 
        <div className="App">
          <div className="jumbotron">
            <div className="d-flex justify-content-center flex-row">
              <div className="ml-auto mr-auto">
                <h1 className="display-4">Welcome to Book Bot</h1>
                <p className="lead">Your Very Own Tech Ghostwriter</p>
              </div>
              <div id="profile-img" className="align-self-center">
              {
                this.state.currUser ?
                <div>
                  <img src={this.state.currUser.photoURL} className="rounded" style={imgStyle} />
                  <button type="button" class="btn btn-outline-primary" onClick={evt => this.handleSignOut(evt)}>Sign Out</button>
                </div>
                :
                <div>
                  <img src={anonUser} alt="Anonymous User" className="rounded" style={imgStyle} /> 
                  <button type="button" class="btn btn-outline-primary" onClick={evt => this.handleSignIn(evt)}>Sign In</button>
                </div>
              }
              </div>
            </div>
            <hr className="my-4"/>
            
          </div>
          <div className="container">
            <div className="row">
           
              <Switch>
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
