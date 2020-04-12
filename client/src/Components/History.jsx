import React from 'react';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  paper: {
    width: '100%',
    height: '100%',
  },
});
//Component that serves as a container for older meessages

const History = () => {
  const styles = useStyles();
  return (
    <Paper className={styles.paper}>
      <img src="./History-Background.jpg" alt="Hello Bitch !" />
    </Paper>
  );
};

export default History;
