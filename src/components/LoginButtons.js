import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const style = {
  margin: 15,
};

class LoginButtons extends Component {
  render() {
    return (
      <ButtonGroup variant="contained" style={style} >
        <Button onClick={(event) => this.props.handleClick(event, 'login')}>Login</Button>
        <Button onClick={(event) => this.props.handleClick(event, 'register')}>Sign Up</Button>
      </ButtonGroup>
    );
  }
}

export default LoginButtons;