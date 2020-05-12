import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class LoginFields extends Component {
  render() {
    return (
      <div>
        <div style={{ fontSize: 12, color: "red" }}>
          {this.props.authError}
        </div>
        <TextField
          name="username"
          hintText="Enter your username"
          floatingLabelText="Username"
          value={this.props.username}
          onChange={this.props.handleChange}
        />
        <div style={{ fontSize: 12, color: "red" }}>
          {this.props.usernameError}
        </div>
        <br />
        <TextField
          type="password"
          name="password"
          hintText="Enter your Password"
          floatingLabelText="Password"
          value={this.props.password}
          onChange={this.props.handleChange}
        />
        <div style={{ fontSize: 12, color: "red" }}>
          {this.props.passwordError}
        </div>
        <br />
      </div>
    );
  }
}

export default LoginFields;