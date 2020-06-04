import React, { Component } from 'react';
import './App.css';
import LoginScreen from './components/LoginScreen';
import Taskscreen from './components/TaskScreen';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tokendata: { "token": "385279be8cd1e193f56e9036195a7754", "userid": "4ac20456d4ff4d679bc4cfcb6d4a90e5", "expiry": "2020-06-06T03:20:09.451101798Z" },
    }
  }

  render() {
    return (
      <div className="App container">
        <h1>Welcome to Shigoto the Tasking App</h1>
        {!this.state.tokendata ?
          <LoginScreen appContext={this} key={"login-screen"} /> :
          <Taskscreen tokendata={this.state.tokendata} />
        }
      </div>
    );
  }
}

export default App;

