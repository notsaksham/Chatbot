import React from 'react';
import Fab from '@material-ui/core/Fab';
import {makeStyles} from '@material-ui/core/styles';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: '15px',
    left: '15px',
  },
});

const SideBarFAB = ({clearing}) => {
  const styles = useStyles();
  return (
    <Fab
      color="primary"
      className={styles.root}
      size="medium"
      onClick={clearing}>
      <DeleteSweepIcon />
    </Fab>
  );
};

export default SideBarFAB;
