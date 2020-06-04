import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class TaskEditDialog extends Component {
  render() {
    return (
      <Dialog
        onClose={this.props.handleClose}
        open={this.props.dialogueOpen}
        className="standardStyle"
      >
        <DialogTitle>
          Modify Task
          <IconButton onClick={this.props.handleClose} style={{
            position: 'absolute',
            right: 7,
            top: 7,
          }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers >
          <TextField
            name="taskDetailsMod"
            label="Enter task details"
            value={this.props.taskDetailsMod}
            onChange={this.props.handleChange}
            variant="outlined"
            multiline
            rows={4}
          />
          <br />
          <TextField
            type="number"
            name="taskPriorityMod"
            label="Select task priority"
            value={this.props.taskPriorityMod}
            onChange={this.props.handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={(event) => this.props.handleClick(event, "update")}>
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default TaskEditDialog;