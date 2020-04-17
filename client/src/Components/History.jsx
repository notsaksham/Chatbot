import React from 'react';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import {Box} from '@material-ui/core';
import Message from './Message';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginRight: '6px',
    marginLeft: '6px',
    marginBottom: '6px',
    marginTop: '6px',
    width: '99%',
    height: '95%',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  right_element: {
    padding: theme.spacing(2),
    textAlign: 'right',
    wrap: 'on',
    color: theme.palette.text.secondary,
  },
  left_element: {
    padding: theme.spacing(2),
    wordWrap: 'break-word',
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));
//Component that serves as a container for older meessages

const History = ({messages}) => {
  const styles = useStyles();
  return (
    <Paper className={styles.paper}>
      <Box height="83vh" width="100%">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="stretch"
          spacing={1}>
          {messages.map((message) => (
            <Grid item>
              {message.fromUser ? (
                <Paper className={styles.right_element}>
                  <Message message={message} />
                </Paper>
              ) : (
                <Paper className={styles.left_element}>
                  <Message message={message} />
                </Paper>
              )}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Paper>
  );
};

export default History;
