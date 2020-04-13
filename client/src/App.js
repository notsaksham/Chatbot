import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Sidebar from './Components/Sidebar';
import History from './Components/History';
import {makeStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
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
    <Grid
      container
      className={styles.root}
      justify="center"
      alignItems="stretch">
      <Grid item xs={3}>
        <Sidebar />
      </Grid>
      <Divider />
      <Grid item xs={9}>
        <Grid justify="center" alignItems="stretch" direction="column">
          <History />
          <InputQuestion />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
