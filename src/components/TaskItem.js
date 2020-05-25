import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const divStyle = {
  margin: "auto",
}

const textStyle = {
  width: "300px",
  border: "1px solid black",
  textAlign: 'left',
  display: "inline-block",
};

const iconStyle = {
  verticalAlign: "top",
  display: "inline-block",
};

class TaskItem extends Component {
  render() {
    var props = this.props
    return (
      <div style={divStyle}>
        <Card style={textStyle}>
          <CardContent >
            {props.taskData.task}
          </CardContent>
        </Card>
        <IconButton style={iconStyle} onClick={(event) => this.props.handleClick(event, "delete", this.props.taskData.taskid)}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </ div >
    );
  }
}

export default TaskItem;