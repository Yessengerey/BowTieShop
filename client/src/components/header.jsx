import React, {
  Component
} from 'react';

// React Router
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
              <Link to='/' className={styles.link} onClick={() => {
                this.props.nextSlide(0);
              }}>
                Главная
              </Link>
            </div>

            <div
              className={styles.header_right_menu_item}>
              <Link to='/shop'
                className={styles.link}
                onClick={() => {
                  this.props.nextSlide(1);
                }}>
                Магазин
              </Link>
            </div>

            <div
              className={styles.header_right_menu_item}>
              <Link to='/about'
                className={styles.link}
                onClick={() => {
                  this.props.nextSlide(2);
                }}>
                О нас
              </Link>
            </div>

          </div>

        </div>

      </div>
    )
  }
}
