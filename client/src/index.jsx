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
import Shop from './containers/shop.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={(props) => (<Main style={{height: '100%'}}/>)}></Route>
        <Route exact path='/shop' render={(props) => (<Shop style={{height: '100%'}}/>)}></Route>
        <Route exact path='/about' render={(props) => (<About style={{height: '100%'}}/>)}></Route>

      </div>
    )
  }
}

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'));
