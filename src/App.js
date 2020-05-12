import React, { Component } from 'react';
import './App.css';
import LoginScreen from './components/LoginScreen';
import Taskscreen from './components/TaskScreen';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tokendata: null,
    }
  }

  render() {
    return (
      <div className="App">
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