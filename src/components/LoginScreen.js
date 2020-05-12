import React, { Component } from 'react';
import LoginFields from './LoginFields';
import LoginButtons from './LoginButtons';

class LoginScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "peej",
      password: "Apples99",
      usernameError: "",
      passwordError: "",
      authError: "",
    }
  }

  validate = () => {
    let usernameError = "";
    let passwordError = "";

    if (this.state.username.length < 4) {
      usernameError = "Length of username must be at least 4 characters";
    }

    if (this.state.password.length < 8) {
      passwordError = "Length of password must be at least 8 characters";
    }

    this.setState({ usernameError, passwordError });

    return (!usernameError && !passwordError)
  };

  handleClick = async (event, authType) => {
    this.setState({ authError: "" })
    if (!this.validate()) {
      return
    }

    var url = "https://shigoto-project.nn.r.appspot.com/api/v1/" + authType

    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({
        username: this.state.username.toLowerCase(),
        password: this.state.password,
      })
    };
    const response = await fetch(url, requestOptions)
    if (response.status === 200) {
      const data = await response.json();
      this.props.appContext.setState({ tokendata: data })
    } else if (response.status === 400) {
      const data = await response.text();
      this.setState({ authError: data })
    } else {
      console.log("Unknown error: How did you get here?")
    }

  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="loginscreen" key="loginscreen">
        <LoginFields
          handleChange={this.handleChange}
          username={this.state.username}
          password={this.state.password}
          usernameError={this.state.usernameError}
          passwordError={this.state.passwordError}
          authError={this.state.authError}
        />
        <div>
          <LoginButtons handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default LoginScreen;