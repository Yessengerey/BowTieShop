import React, { Component } from 'react';

import Header from '../components/header.jsx';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div style={{height: '100%'}}>
        <Header />
      </div>
    )
  }
}
