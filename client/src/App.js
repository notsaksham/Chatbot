import React, {Component} from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import History from './Components/History';
import InputQuestion from './Components/Input';

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: [
        {
          text:
            'When growing potato plants (Solanum tuberosum), it is important to keep in mind that potatoes are cool weather vegetables. The best time when to plant potatoes is in early spring. Planting potatoes two to three weeks before your last frost date will produce the most satisfactory results.During March and April is the best time to grow potato.',
          fromUser: false,
        },
        {text: 'How do you grow potato ?', fromUser: true},
        {text: 'Hello, how may I help you ?', fromUser: false},
        {text: 'Hello !', fromUser: true},
      ],
    };
  }
  render() {
    return (
      <Grid justify="center" alignItems="stretch" direction="column">
        <History messages={this.state.messages} />
        <InputQuestion />
      </Grid>
    );
  }
}

export default App;
