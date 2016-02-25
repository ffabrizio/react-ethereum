import React, {Component} from 'react'

import keys from '../keys.json'

import styles from '../styles/greeter.css'

class Greeter extends Component {
  
  render() {
    
    return (
      <div className={styles.root}>
        <span className={styles.msg}>{keys.welcome}</span>
        {this.props.children}
      </div>
    )
  }
}

export default Greeter