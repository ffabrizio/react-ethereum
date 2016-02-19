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
    
  }
  
  refresh() {
    
    let storeState = AccountStore.getState()
    console.log(storeState)
    return storeState
    
  }
  
  componentDidMount() {
    
    AccountStore.listen(this.onChange.bind(this))
    
  }
  
  componentWillUnmount() {
    
    AccountStore.unlisten(this.onChange.bind(this))
    
  }

  onChange() {
    
    this.setState(this.refresh())
    
  }

  render() {
    
    let msg = ''
    let loggedin = this.state.accounts.length > 0
    
    if (loggedin) {
      msg = 'Welcome back, ' + this.state.accounts[0].name
    }
    
    return (
      
      <div>
        <Greeter />
        <Login loggedin={loggedin} msg={msg} />
        <hr />
        <Balance />
        <Payment />
      </div>
      
    )
  }
}

export default App