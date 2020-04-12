import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
//Component for the input field

const useStyles = makeStyles({
  paper: {
    width: '100%',
    height: '100%',
  },
});

const InputQuestion = () => {
  const styles = useStyles();
  return (
    <Paper>
      <TextField
        id="outlined-basic"
        label="Outlined"
        fullWidth
        style={{margin: 8}}
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"></TextField>
    </Paper>
  );
};

export default InputQuestion;
