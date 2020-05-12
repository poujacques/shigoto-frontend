import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const style = {
  margin: 15,
  padding: 10,
  border: "1px solid black"
};

const ButtonStyle = {
  margin: 15,
  verticalAlign: "bottom",
  color: "blue",
};

class TaskItem extends Component {
  render() {
    var props = this.props
    return (
      <Card style={style}>
        <CardContent style={{ textAlign: 'left' }}>
          {props.taskData.task}
        </CardContent>
        <CardContent >
          <Button style={ButtonStyle} variant="contained" onClick={(event) => this.props.handleClick(event, "delete", this.props.taskData.taskid)}>
            Delete
          </Button>
        </CardContent>
      </Card>
    );
  }
}

export default TaskItem;