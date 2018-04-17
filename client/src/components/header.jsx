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
              <Link to='/'>Главная</Link>
            </div>

            <div className={styles.header_right_menu_item}>
              <Link to='/shop'>Магазин</Link>
            </div>

            <div className={styles.header_right_menu_item}>
              <Link to='/about'>О нас</Link>
            </div>

          </div>

        </div>

      </div>
    )
  }
}
