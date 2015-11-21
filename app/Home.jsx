import React, { Component } from 'react'

import styles from './Home.css'

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
        <button type="button" onClick={this.onAddCount}>add count</button>
        <p className={styles.welcome}>Count Result: {count}</p>
      </div>
    )
  }
}
