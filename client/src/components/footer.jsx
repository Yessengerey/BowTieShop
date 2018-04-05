import React, { Component } from 'react';

import styles from '../../../styles/footer.css';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className={styles.footer_main_container}>

        <div className={styles.footer_left}>

        </div>

        <div className={styles.footer_center}>

        </div>

        <div className={styles.footer_right}>

          <div className={styles.footer_right_menu_outer_container}>

            <div className={styles.footer_right_menu_item}>
              Главная
            </div>

            <div className={styles.footer_right_menu_item}>
              Магазин
            </div>

            <div className={styles.footer_right_menu_item}>
              О нас
            </div>

          </div>

        </div>

      </div>
    )
  }
}
