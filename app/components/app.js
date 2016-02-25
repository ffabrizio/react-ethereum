import React, {Component} from 'react'
import Greeter from './greeter'
import Login from './login'
import Payment from './payment'
import Balance from './balance'
import keys from '../keys.json'

class App extends Component {
  
  render() {
    
    let msg = ''
    let loggedin = this.props.accounts != null && this.props.accounts.length > 0
    let nodes = []
    
    if (loggedin) {
      msg = 'Welcome back, ' + this.props.accounts[0].id
      nodes = [
        <Balance key={keys.components.balance} />,
        <Payment key={keys.components.payment} />
      ]
    }
    
    return (
      
      <div>
        <Greeter>
          <Login loggedin={loggedin} msg={msg} fetching={this.props.fetching} />
        </Greeter>
        {nodes}
      </div>
      
    )
  }
}

export default App