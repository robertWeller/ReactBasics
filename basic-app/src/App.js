import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Clock } from './clock/Clock'

const user = {
  firstName: 'Rob',
  lastName: 'Weller'
};

function formatName(user){
  return user.firstName + ' ' + user.lastName;
}

function functionalComponent(props){
  return <div>This is just to test out if this works. {props.firstName}</div>
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />          
          <h1 className="App-title">Welcome to React, {formatName(user)}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {functionalComponent(user)}
        <Clock />
      </div>
    );
  }
}

export default App;
