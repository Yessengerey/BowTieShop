// React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Hello World
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
