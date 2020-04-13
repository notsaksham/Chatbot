import React, {Component} from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import {Paper, Button, Grid, styled, makeStyles, Box} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const MyPaper = styled(Paper)({
  marginTop: '6px',
  marginRight: '3px',
  marginLeft: 'px',
  marginBottom: '3px',
  display: 'flex',
  alignItems: 'center',
  height: '50%',
  width: '100%',
  background: 'linear-gradient(45deg, #9a09f4 30%, #09f4ec 90%)',
});

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: '100%',
    width: '100%',
  },
});

class NewInput extends Component {
  constructor() {
    super();
    this.state = {
      inputtext: '',
    };
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {inputtext} = this.state;

    axios.post('/', {inputtext}).then((result) => {});
  };

  render() {
    const {inputtext} = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <MyPaper>
          <Box
            m={1}
            p={2}
            mx="xl"
            height="100%"
            width="95%"
            pt={2}
            display="inline">
            <TextField
              name="inputtext"
              value={inputtext}
              fullWidth
              onChange={this.onChange}
            />
          </Box>
          <Box m={1} p={2} height="100%" width="5%" pt={2} display="inline">
            <Button type="submit" color="primary">
              <SendIcon />
            </Button>
          </Box>
        </MyPaper>
      </form>
    );
  }
}

export default NewInput;
