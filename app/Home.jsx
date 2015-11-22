import React, { Component } from 'react'

import styles from './Home.css'
import 'normalize.css'
import moment from 'moment'

import avatorImg from './images/avatar.png'

export default class Home extends Component {
  state = {
    count: 1
  }

  onAddCount = () => {
    this.setState(({ count }) => ({ count: count + 1 }))
  }

  render() {
    const { count } = this.state
    return (
      <div className={styles.root}>
        <button
          type="button"
          onClick={this.onAddCount}>
          add count
        </button>
        <p className={styles.welcome}>Count Result: {count}</p>
        {moment().format('YYYY-MM-DD HH:mm:ss')}

        <img src={avatorImg} />

        <div className={styles.bg}>something</div>
      </div>
    )
  }
}
