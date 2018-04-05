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
    return (
      <div className={styles.main_outer_container}>
        <Header />
        {/* <div className={styles.main_inner_container}>
          <section className={styles.parallax_section}>
            <h1>Such Adorableness</h1>
          </section>
        </div> */}
        <Footer />
      </div>
    )
  }
}
