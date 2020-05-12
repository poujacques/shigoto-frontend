import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

const style = {
  margin: 15,
};

class TaskItem extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <TextField value={this.props.taskData.task} id={"details-" + this.props.taskData.taskid} />
          <RaisedButton label={"Delete"} onClick={(event) => this.props.handleClick(event, "delete", this.props.taskData.taskid)} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default TaskItem;