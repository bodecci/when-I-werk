import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
// import ProtectedRoute from "../ProtectedRoute/ProtectedRoute"
import {connect} from 'react-redux';
import ShiftInput from '../ShiftInput/ShiftInput';
import ViewShift from '../ViewShift/ViewShift'
import Nav from '../Nav/Nav';
import './App.css';

class App extends Component {

  render () {
    return (
        <div className="App">
          <header>
            <h1>Shift Creatr</h1>
          </header>
          <Router>
            <div>
              <Nav />
              <Switch>
                < Redirect exact from = "/"
                           to = "/view_shift" 
                  />
                <Route exact path="/view_shift"
                       component={ViewShift}
                  />
                <Route exact path="/create_shift"
                       component={ShiftInput}
                  />
              </Switch>
            </div>
          </Router>


          
        </div>

      
    );
  }
}

export default connect()(App);
