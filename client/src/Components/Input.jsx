import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import {Paper, Button, styled, Box} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const MyPaper = styled(Paper)({
  marginRight: '6px',
  marginLeft: '6px',
  width: '99%',
  height: '90%',
  display: 'flex',
  alignItems: 'center',
  background: 'linear-gradient(45deg, #9a09f4 30%, #09f4ec 90%)',
});

class NewInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputtext: '',
      q_id: [],
      botReply: '',
    };
    this.callfunc = this.callfunc.bind(this);
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.callfunc();
  };

  callfunc = () => {
    let variable = this.state.inputtext.split(' ');
    let q_id = [];

    this.props.addUserMessage(this.state.inputtext);
    //this.props.addBotMessage(this.state.inputtext);
    for (let i = 0; i < variable.length; i++) {
      let x = this.state.inputtext.split(' ')[i];
      let y = {
        word: x,
      };
      fetch('http://localhost:5000/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(y),
      })
        .then((response) => response.json())
        .then((response) => {
          //console.log(response.word)
          q_id.push(response.word);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    console.log(q_id);

    setTimeout(
      function setMessage(message) {
        // console.log(q_id.length);
        let str = '';
        for (let i = 0; i < q_id.length; i++) {
          let x = String(q_id[i]);
          str = str.concat(x);
          // console.log(str)
        }
        console.log(str);
        fetch(`http://localhost:5000/${str}`)
          .then((response) => response.json())
          .then((response) => {
            this.props.addBotMessage(response.answer);
          })
          .catch((err) => console.error(err));
      }.bind(this),
      1000,
    );
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <MyPaper>
          <Box
            m={1}
            p={2}
            mx="xl"
            height="97%"
            width="95%"
            pt={2}
            display="inline">
            <TextField name="inputtext" fullWidth onChange={this.onChange} />
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
