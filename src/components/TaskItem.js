import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const TaskItem = (props) => {

  return (
    <div style={{ margin: "auto" }}>
      <Card className="textStyle">
        <CardContent >
          {props.taskData.task}
        </CardContent>
      </Card>
      <div className="iconStyle" >
        <IconButton onClick={(event) => props.handleClick(event, "delete", props.taskData.taskid)}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </div>
    </div>
  )
}

export default TaskItem;
