import React, { Component } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

const style = {
  margin: 15,
  border: '10px solid black',
};

const initialState = {
  taskData: null,
  taskDetails: "",
  taskPriority: "",
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

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleClick = async (event, action, id) => {
    var tokendata = this.props.tokendata
    var url = "https://shigoto-project.nn.r.appspot.com/api/v1/" + tokendata.userid + "/tasks"

    if (action === "create") {
      var requestBody = {
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
      url = url + "/" + id
      const requestOptions = {
        method: 'DELETE',
        headers: {
          "Authorization": "Bearer " + tokendata.token
        },
      }
      await fetch(url, requestOptions)
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
          <div>{tasksByPriority}</div>
        </div>
      )
    })

    return allTasks
  }

  render() {
    return (
      <div>
        {this.state.taskData ? this.renderTasks() : "Loading Tasks..."}
        <br />
        <div>
          Add New Task
          <TaskForm
            handleChange={this.handleChange}
            handleClick={this.handleClick}
            taskDetails={this.state.taskDetails}
            taskPriority={this.state.taskPriority}
          />
        </div>
      </div>
    );
  }
}

export default TaskScreen;