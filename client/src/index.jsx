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
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';

// Other Components
import SwipeableViews from 'react-swipeable-views';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    }

    this.handleSlideIndexChange = this.handleSlideIndexChange.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  nextSlide(nextSlideIndex) {
    this.setState({
      slideIndex: nextSlideIndex
    })
  }

  componentWillMount() {
    var windowLocation = window.location.href;

    windowLocation = windowLocation.toString();

    var hrefParts = windowLocation.split('/');
    var currentIndex = 0;

    for (var i = 0; i < hrefParts.length; i++) {
      if (hrefParts[i] === 'shop') {
        currentIndex = 1;
        break;
      } else if (hrefParts[i] === 'about') {
        currentIndex = 2;
        break;
      }
    }


    this.setState({
      slideIndex: currentIndex
    })
  }

  handleSlideIndexChange(nextIndex) {
    this.setState({
      slideIndex: nextIndex
    })
  }

  render() {
    return (
      <div>
        <Header
          nextSlide={this.nextSlide}/>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleSlideIndexChange}>
          <Route exact path='/' render={(props) => (<Main style={{height: '100%'}}/>)}></Route>
          <Route exact path='/shop' render={(props) => (<Shop style={{height: '100%'}}/>)}></Route>
          <Route exact path='/about' render={(props) => (<About style={{height: '100%'}}/>)}></Route>
        </SwipeableViews>
        <Footer
          nextSlide={this.nextSlide}/>
      </div>
    )
  }
}

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'));
