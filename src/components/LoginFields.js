import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class LoginFields extends Component {
  render() {
    return (
      <div>
        <div className="errorStyle">
          {this.props.authError}
        </div>
        <TextField
          name="username"
          label="Username"
          value={this.props.username}
          onChange={this.props.handleChange}
        />
        <div className="errorStyle">
          {this.props.usernameError}
        </div>
        <br />
        <TextField
          type="password"
          name="password"
          label="Password"
          value={this.props.password}
          onChange={this.props.handleChange}
        />
        <div className="errorStyle">
          {this.props.passwordError}
        </div>
        <br />
      </div>
    );
  }
}

export default LoginFields;