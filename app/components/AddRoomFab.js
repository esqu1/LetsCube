import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function AddRoomFab({ onCreateRoom }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [roomName, setRoomName] = useState('');
  const [isPrivate, setPrivate] = useState(false);
  const [password, setPassword] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handlePrivate = () => {
    setPrivate(!isPrivate);
  };

  const handleRoomNameChange = (event) => {
    if (event.target.value.length < 100) {
      setRoomName(event.target.value);
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
    setRoomName('');
    setPrivate(false);
    setPassword('');
  };

  const handleSubmit = () => {
    onCreateRoom({
      name: roomName,
      password,
    });
  };

  return (
    <div>
      <Fab className={classes.fab} onClick={handleOpen}>
        <AddIcon />
      </Fab>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Room</DialogTitle>
        <DialogContent className={classes.paper}>
          <TextField
            id="roomName"
            label="Room Name"
            onChange={handleRoomNameChange}
            value={roomName}
            autoComplete="off"
            autoFocus
            fullWidth
          />
          <FormControlLabel
            label="Private Room?"
            control={
              <Switch checked={isPrivate} onChange={handlePrivate} />
          }
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            disabled={!isPrivate}
            onChange={handlePasswordChange}
            autoFocus
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} color="primary" disabled={!roomName || (isPrivate && !password)}>Create</Button>
          <Button onClick={handleClose} color="secondary">Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

AddRoomFab.propTypes = {
  onCreateRoom: PropTypes.func.isRequired,
};

export default AddRoomFab;
