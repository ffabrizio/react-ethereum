import React, {Component} from 'react'
import keys from '../keys.json'

class Payment extends Component {
  
  render() {
    
    return (
      
      <div>
        <h4>Payment</h4>
        <p>{keys.transactions.to}: <input /></p>
        <p>{keys.transactions.value}: <input /></p>
        <p><button>Pay</button></p>
      </div>
      
    )
  }
}

export default Payment