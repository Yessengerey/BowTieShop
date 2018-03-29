// React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// React Router
import { BrowserRouter, Link, Route } from 'react-router-dom';

// Custom Components
import About from './containers/about.jsx';
import Main from './containers/main.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Main style={{height: '100%'}}/>
    )
  }
}

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'));
