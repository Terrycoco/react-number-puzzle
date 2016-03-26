import React, { Component } from 'react';
import Puzzle from 'components/Puzzle';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return  (
      <div>
       <Puzzle />
      </div>
    );
  }
}
