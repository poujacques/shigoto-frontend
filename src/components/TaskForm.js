import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 15,
};

class TaskForm extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <TextField
            name="taskDetails"
            hintText="Enter task details"
            floatingLabelText="Task"
            required={true}
            value={this.props.taskDetails}
            onChange={this.props.handleChange}
          />
          <br />
          <TextField
            type="number"
            name="taskPriority"
            hintText="Select task priority"
            floatingLabelText="Priority"
            value={this.props.taskPriority}
            onChange={this.props.handleChange}
          />
          <br />
          <RaisedButton label={"Add Task"} style={style} onClick={(event) => this.props.handleClick(event, "create")} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default TaskForm;