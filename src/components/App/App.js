import React, { Component } from 'react';
// import {
//   HashRouter as Router,
//   Route,
//   Redirect,
//   Switch
// } from 'react-router-dom';
// import ProtectedRoute from "../ProtectedRoute/ProtectedRoute"
// import {connect} from 'react-redux';
import ShiftInput from '../ShiftInput/ShiftInput';
import './App.css';

class App extends Component {

  render () {
    return (
        <div className="App">
          <header>
            <h1>Shift Creator</h1>
            <ShiftInput />
          </header>
          
        </div>

      
    )
  }
}

export default App;
