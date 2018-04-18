import React, { Component } from 'react';

import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';

import styles from '../../../styles/main.css';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    var firstSectionStyle = Object.assign({},
      styles.temp1,
      styles.temp2
    );

    console.log('OBJECT HERE', typeof styles.temp2);

    var staticSectionStyle = Object.assign({},
      styles.section,
      styles.static
    );

    var lastSectionStyle = Object.assign({},
      styles.section,
      styles.parallax,
      styles.bg2
    )
    return (
      <div className={styles.main_outer_container}>
        <div className={`${styles.section} ${styles.parallax} ${styles.bg1}`}>
          <h1>MAIN PAGE PICTURE</h1>
        </div>

        <div className={`${styles.section} ${styles.static}`}>
          <h1>STATIC SECTION WITH INFO</h1>
        </div>

        <div className={`${styles.section} ${styles.parallax} ${styles.bg2}`}>
          <h1>LAST SECTION</h1>
        </div>
      </div>
    )
  }
}
