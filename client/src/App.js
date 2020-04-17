import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import History from './Components/History';
import {makeStyles} from '@material-ui/core/styles';
import InputQuestion from './Components/Input';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: '100%',
    width: '100%',
  },
});

function App() {
  const styles = useStyles();
  return (
    <Grid justify="center" alignItems="stretch" direction="column">
      <History />
      <InputQuestion />
    </Grid>
  );
}

export default App;
