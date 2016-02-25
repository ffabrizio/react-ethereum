import React, {Component} from 'react'

import Transactions from './transactions'

import keys from '../keys.json'

class Balance extends Component {
  static propTypes = { 
  
    accounts: React.PropTypes.array
    
  }
  render() {
    let rows = [];
    this.props.accounts.forEach(function(account) {
      rows.push(
        <div key={account.addr}>
          <p>{keys.balance.address}: {account.addr} </p>
          <p>{keys.balance.value}: {account.eth}</p>
        </div>
      )
    })
    return (
      <div>
        <h4>Balance</h4>
        {rows}
        <Transactions />
      </div>
    )
  }
}


export default Balance