import React, {Component} from 'react'
import Greeter from './greeter'
import Login from './login'
import Payment from './payment'
import Balance from './balance'
import keys from '../keys.json'

class App extends Component {
  
  render() {
    
    let msg = ''
    let loggedin = this.props.accounts.length > 0
    let nodes = []
    
    if (loggedin) {
      msg = 'Welcome back'
      nodes.push (
        <Balance key={keys.components.balance} accounts={this.props.accounts} />,
        <Payment key={keys.components.payment} />
      )
    }
    
    return (
      
      <div>
        <Greeter>
          <Login loggedin={loggedin} msg={msg} dialogopen={this.props.dialogopen}/>
        </Greeter>
        {nodes}
      </div>
      
    )
  }
}

export default App