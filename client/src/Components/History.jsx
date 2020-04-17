import React from 'react';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import {Box} from '@material-ui/core';

const useStyles = makeStyles({
  paper: {
    marginRight: '6px',
    marginLeft: '6px',
    marginBottom: '6px',
    marginTop: '6px',
    width: '99%',
    height: '95%',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
});
//Component that serves as a container for older meessages

const History = () => {
  const styles = useStyles();
  return (
    <Paper className={styles.paper}>
      <Box height="85vh" width="100%"></Box>
    </Paper>
  );
};

export default History;
