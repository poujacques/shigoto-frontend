import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 15,
};

class LoginButtons extends Component {
  render() {
    return (
      <div key={"Login-Div"}>
        <MuiThemeProvider>
          <div>
            <RaisedButton label={"Login"} style={style} onClick={(event) => this.props.handleClick(event, 'login')} />
            <RaisedButton label={"Register"} style={style} onClick={(event) => this.props.handleClick(event, 'register')} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default LoginButtons;