//Component for Older messages that get displayed inside history
import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import {Grid, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '95%',
    height: '95%',
  },
}));

const Message = ({message}) => {
  const styles = useStyles();
  return message.fromUser ? (
    <Grid container display="inline" className={styles.paper}>
      <Grid item xs={11}>
        <Typography>{message.text}</Typography>
      </Grid>
      <Grid item xs={1} justify="center">
        <AccountCircleIcon fontSize="large" color="primary" />
      </Grid>
    </Grid>
  ) : (
    <Grid container display="inline" className={styles.paper}>
      <Grid item xs={1} justify="center">
        <SettingsIcon fontSize="large" color="primary" />
      </Grid>
      <Grid item xs={11}>
        <Typography>{message.text}</Typography>
      </Grid>
    </Grid>
  );
};

export default Message;
