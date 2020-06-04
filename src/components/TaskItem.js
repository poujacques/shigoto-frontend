import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const TaskItem = (props) => {

  return (
    <div style={{ margin: "auto" }}>
      <div className="iconStyle" >
        <IconButton onClick={(event) => props.handleClick(event, "modify", props.taskData)}>
          <EditIcon fontSize="small" />
        </IconButton>
      </div>
      <Card className="textStyle" onClick={(event) => props.handleClick(event, "modify", props.taskData)}>
        <CardContent >
          {props.taskData.task}
        </CardContent>
      </Card>
      <div className="iconStyle" >
        <IconButton onClick={(event) => props.handleClick(event, "delete", props.taskData)}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </div>
    </div>
  )
}

export default TaskItem;
