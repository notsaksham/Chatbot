import React from 'react';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import Option from './Option';

const useStyles = makeStyles((theme) => ({
  sidebar: {
    marginRight: '6px',
    marginLeft: '2px',
    marginBottom: '16px',
    '& > *': {
      margin: theme.spacing(0.5),
    },
    background: 'linear-gradient(45deg, #25f1fc 30%, #00f910 90%)',
  },
}));

const Sidebar = () => {
  const styles = useStyles();
  return (
    <Paper className={styles.sidebar}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
        <Option
          id={num}
          index={num}
          className={styles.chip}
          question="Hello World Hello WorldHello WorldHello World"></Option>
      ))}
    </Paper>
  );
};

export default Sidebar;
