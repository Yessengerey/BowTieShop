import React, { Component } from 'react';

import styles from '../../../styles/header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className={styles.header_main_container}>

        <div className={styles.header_left}>

        </div>

        <div className={styles.header_center}>

        </div>

        <div className={styles.header_right}>

          <div className={styles.header_right_menu_outer_container}>

            <div className={styles.header_right_menu_item}>
              Главная
            </div>

            <div className={styles.header_right_menu_item}>
              Магазин
            </div>

            <div className={styles.header_right_menu_item}>
              О нас
            </div>

          </div>

        </div>

      </div>
    )
  }
}
