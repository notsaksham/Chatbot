import React, { Component } from 'react';
import axios from 'axios';

class NewInput extends Component {
    constructor() {
        super();
        this.state = {
          inputtext: '',
        };
      }

      onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }

      onSubmit = (e) => {
        e.preventDefault();
        const { inputtext } = this.state;

        axios.post('/', { inputtext })
          .then((result) => {
          });
      }

      render() {
        const { inputtext } = this.state;
        return (
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              name="inputtext"
              value={inputtext}
              onChange={this.onChange}
            />
            <button type="submit">Submit</button>
          </form>
        );
      }
    }

export default NewInput;