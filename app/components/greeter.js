import React, {Component} from 'react'
import keys from '../keys.json'
import styles from '../styles/greeter.css'

class Greeter extends Component {
  
  render() {
    
    return (
      
      <div className={styles.root}>
        {keys.welcome}
      </div>
      
    )
  }
}


export default Greeter