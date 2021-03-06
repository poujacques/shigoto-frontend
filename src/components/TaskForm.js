import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class TaskForm extends Component {
  render() {
    return (
      <div>
        <h3>Add New Task</h3>
        <TextField
          name="taskDetailsForm"
          label="Enter task details"
          value={this.props.taskDetailsForm}
          onChange={this.props.handleChange}
          variant="outlined"
          multiline
          rows={4}
        />
        <br />
        <TextField
          type="number"
          name="taskPriorityForm"
          label="Select task priority"
          value={this.props.taskPriorityForm}
          onChange={this.props.handleChange}
        />
        <br />
        <div className="standardStyle">
          <Button variant="contained" className="standardStyle" onClick={(event) => this.props.handleClick(event, "create")}>Add Task</Button>
        </div>
      </div>
    );
  }
}

export default TaskForm;