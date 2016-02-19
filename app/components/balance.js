import React, {Component} from 'react'
import Transactions from './transactions'
import keys from '../keys.json'

class Balance extends Component {
  
  render() {
    
    return (
      
      <div>
        <h4>Balance</h4>
        <p>{keys.balance.address}: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx </p>
        <p>{keys.balance.value}: xxxx xxxxx </p>
        <Transactions />
      </div>
      
    )
  }
}


export default Balance