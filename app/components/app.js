import React, {Component} from 'react'
import Greeter from './greeter'
import Login from './login'
import Payment from './payment'
import Balance from './balance'
import AccountStore from '../stores/accountstore'
import Actions from '../actions'

class App extends Component {

  constructor(props) {
    
    super(props)
    this.state = this.refresh()
    
    AccountStore.listen(this.onChange.bind(this))
    
  }
  
  refresh() {
    
    return AccountStore.getState()
    
  }
  
  onChange() {
    
    this.setState(this.refresh())
    
  }

  render() {
    
    let msg = ''
    let securenodes
    
    if (this.state.loggedin) {
      msg = 'Welcome back'
      
      securenodes = [
        <Balance key='bal' />,
        <Payment key='pay' />
      ]
    }
    
    
    return (
      <div>
        <Greeter>
          <Login loggedin={this.state.loggedin} msg={msg} />
        </Greeter>
        {securenodes}
      </div>
    )
  }
}

export default App