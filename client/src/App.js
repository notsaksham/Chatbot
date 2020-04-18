import React, {Component} from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import History from './Components/History';
import InputQuestion from './Components/Input';

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    };

    this.addUserMessage = this.addUserMessage.bind(this);
    this.addBotMessage = this.addBotMessage.bind(this);
  }

  addUserMessage = (messageUser) => {
    let userMessage = {
      text: messageUser,
      fromUser: true,
    };
    this.setState((prevState) => ({
      messages: [...prevState.messages, userMessage],
    }));
  };

  addBotMessage = (botMessage) => {
    let messageBot = {
      text: botMessage,
      fromUser: false,
    };
    console.log(messageBot);
    this.setState((prevState) => ({
      messages: [...prevState.messages, messageBot],
    }));
  };

  render() {
    return (
      <Grid justify="center" alignItems="stretch" direction="column">
        <History messages={this.state.messages} />
        <InputQuestion
          addUserMessage={this.addUserMessage}
          addBotMessage={this.addBotMessage}
        />
      </Grid>
    );
  }
}

export default App;
