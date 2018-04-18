import React, { Component } from 'react';

import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';

import styles from '../../../styles/main.css';

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentWillMount() {
    console.log('MOUNTED');
    this.setState({});
  }

  render() {
    console.log('RENDERED');
    return (
      <div style={{backgroundColor: 'yellow'}}>
        <h1>SHOP PAGE</h1>
      </div>
    )
  }
}
