import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Sidebar from './Components/Sidebar';
import History from './Components/History';
import {makeStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
//import InputQuestion from './Components/Input';
import InputQuestion from './Components/NewInput';

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
    <Grid container className={styles.root}>
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <Divider />
      <Grid item xs={10}>
        <Grid container>
          <History />
          <InputQuestion />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
