import React, { Component } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const initialState = {
  taskData: null,
  taskDetails: "",
  taskPriority: "",
  taskIDMod: null,
  taskDetailsMod: null,
  taskPriorityMod: null,
  dialogueOpen: false,
}

class TaskScreen extends Component {
  state = initialState

  getTaskData = async () => {
    var tokendata = this.props.tokendata
    var url = "https://shigoto-project.nn.r.appspot.com/api/v1/" + tokendata.userid + "/tasks"

    const requestOptions = {
      headers: {
        "Authorization": "Bearer " + tokendata.token
      },
    };
    const response = await fetch(url, requestOptions)
    const taskData = await response.json()
    this.setState({ taskData })
  }

  handleClickOpen = () => {
    this.setState({
      dialogueOpen: true,
    })
  };

  handleClose = () => {
    this.setState({
      dialogueOpen: false,
    })
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleClick = async (event, action, taskData) => {
    var tokendata = this.props.tokendata
    var url = "https://shigoto-project.nn.r.appspot.com/api/v1/" + tokendata.userid + "/tasks"
    var requestBody = {}

    if (action === "create") {
      requestBody = {
        task: this.state.taskDetails,
      }
      if (this.state.taskPriority) {
        requestBody["priority"] = parseInt(this.state.taskPriority)
      }

      const requestOptions = {
        method: 'POST',
        headers: {
          "Authorization": "Bearer " + tokendata.token
        },
        body: JSON.stringify(requestBody)
      }
      await fetch(url, requestOptions)
      this.setState({ taskDetails: initialState.taskDetails, taskPriority: initialState.taskPriority })
    } else if (action === "delete") {
      url = url + "/" + taskData.taskid
      const requestOptions = {
        method: 'DELETE',
        headers: {
          "Authorization": "Bearer " + tokendata.token
        },
      }
      await fetch(url, requestOptions)
    } else if (action === "modify") {
      console.log("updating", taskData.taskid)
      this.setState({
        taskIDMod: taskData.taskid,
        taskDetailsMod: taskData.task,
        taskPriorityMod: taskData.priority,
      });
      this.handleClickOpen()
    } else if (action === "update") {
      this.handleClose()
      if (this.state.taskDetailsMod) {
        requestBody["task"] = this.state.taskDetailsMod
      }
      if (this.state.taskPriorityMod) {
        requestBody["priority"] = parseInt(this.state.taskPriorityMod)
      }

      url = url + "/" + this.state.taskIDMod
      const requestOptions = {
        method: 'PATCH',
        headers: {
          "Authorization": "Bearer " + tokendata.token
        },
        body: JSON.stringify(requestBody)
      }
      await fetch(url, requestOptions)
      this.setState({ taskIDMod: initialState.taskIDMod, taskDetailsMod: initialState.taskDetailsMod, taskPriorityMod: initialState.taskPriorityMod })
    }
    this.getTaskData()
  }

  componentWillMount() {
    this.getTaskData()
  }

  renderTasks = () => {
    var tasks = this.state.taskData

    var allTasks = []

    var priorities = Object.keys(tasks)
    priorities.forEach(priority => {
      var tasksByPriority = []
      this.state.taskData[priority].forEach(task => {
        tasksByPriority.push(
          <TaskItem
            handleClick={this.handleClick}
            key={task.taskid}
            taskData={task}
          />
        )
      })
      allTasks.push(
        <div key={"priority-" + priority}>
          <h2 >Priority: {priority}</h2>
          <div
          >
            {tasksByPriority}
          </div>
        </div>
      )
    })

    return allTasks
  }

  render() {
    return (
      <div>
        <div>
          <TaskForm
            handleChange={this.handleChange}
            handleClick={this.handleClick}
            taskDetails={this.state.taskDetails}
            taskPriority={this.state.taskPriority}
          />
          <Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.state.dialogueOpen}>
            <DialogTitle>
              Modify Task
              <IconButton onClick={this.handleClose}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers>
              <TextField
                name="taskDetailsMod"
                label="Enter task details"
                value={this.state.taskDetailsMod}
                onChange={this.handleChange}
                variant="outlined"
                multiline
                rows={4}
              />
              <TextField
                type="number"
                name="taskPriorityMod"
                label="Select task priority"
                value={this.state.taskPriorityMod}
                onChange={this.handleChange}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={(event) => this.handleClick(event, "update")}>
                Save changes
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <br />
        <h1>Tasks</h1>
        {this.state.taskData ? this.renderTasks() : "Loading Tasks..."}
      </div>
    );
  }
}

export default TaskScreen;