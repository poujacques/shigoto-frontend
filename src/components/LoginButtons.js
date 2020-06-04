import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

class LoginButtons extends Component {
  render() {
    return (
      <div className="standardStyle">
        <ButtonGroup variant="contained">
          <Button onClick={(event) => this.props.handleClick(event, 'login')}>Login</Button>
          <Button onClick={(event) => this.props.handleClick(event, 'register')}>Sign Up</Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default LoginButtons;