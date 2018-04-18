// React
import React, { Component } from 'react';

import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';

export default class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{backgroundColor: 'blue'}}>
        <h1>HELLO About</h1>
      </div>
    )
  }
}
