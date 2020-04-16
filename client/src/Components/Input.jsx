import React, {Component} from 'react';
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
      q_id:[]
    };
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.callfunc();
  };

  callfunc = () =>{
    let variable = this.state.inputtext.split(" "); 
    let q_id = [];
    for(let i=0;i<variable.length;i++){
      let x = this.state.inputtext.split(" ")[i]
      let y = {
        word:x 
      }
      fetch("http://localhost:5000/",{
        method:"POST",
        headers: {
          Accept: 'application/json','Content-Type': 'application/json',
      },
        body : JSON.stringify(y)
      })
      .then(response =>response.json())
      .then(response =>{
        //console.log(response.word)
        q_id.push(response.word)
      })
      .catch(err =>{
        console.log(err);
      })
    }
    console.log(q_id);
    
    setTimeout(function(){
      // console.log(q_id.length);
      let str = "";
      for (let i=0;i<q_id.length;i++){
        let x =  String(q_id[i])
        str = str.concat(x);
        // console.log(str)
      }
      console.log(str);
      var answer;
      fetch(`http://localhost:5000/${str}`)
        .then(response => response.json())
        .then(response => {console.log(response)})
        .catch(err => console.error(err)) 

    }, 1000)
  }

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
