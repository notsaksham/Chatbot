import React from 'react';
import Fab from '@material-ui/core/Fab';
import {makeStyles} from '@material-ui/core/styles';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: '40px',
    left: '40px',
  },
});

const SideBarFAB = () => {
  const styles = useStyles();
  return (
    <Fab color="secondary" className={styles.root}>
      <MenuOutlinedIcon />
    </Fab>
  );
};

export default SideBarFAB;
