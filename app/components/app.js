import React, {Component} from 'react'
import Greeter from './greeter'
import Login from './login'
import Payment from './payment'
import Balance from './balance'
import LoginActions from '../actions/loginactions'
import LoginStore from '../stores/loginstore'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = this.getStateFromStores(); 
  }
  
  componentDidMount() {
    LoginStore.listen(this.onChange.bind(this));
  }
  
  componentWillUnmount() {
    LoginStore.unlisten(this.onChange.bind(this));
  }
  
  getStateFromStores () {
    return LoginStore.getState();
  }
  
  onChange() {
    this.state = this.getStateFromStores();
    console.log(this.state)
  }
  
  loginClick() {
    LoginActions.login({name: 1})
  }
  
  render() {
    return (
      <div>
        <Greeter />
        <Login />
        <Balance />
        <Payment />
        <button onClick={this.loginClick} />
      </div>
    )
  }
}

export default App