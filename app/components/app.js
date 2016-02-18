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
    this.state = this.refresh();
  }
  
  refresh () {
    var storeState = LoginStore.getState();
    console.log(storeState)
    return storeState;
  }
  
  componentDidMount() {
    LoginStore.listen(this.onChange.bind(this));
  }
  
  componentWillUnmount() {
    LoginStore.unlisten(this.onChange.bind(this));
  }

  onChange() {
    this.setState(this.refresh());
  }

  render() {
    var accName = '';
    if (this.state.accounts.length){
      accName = this.state.accounts[0].name
    }
    return (
      <div>
        <Greeter />
        <Login loggedin={this.state.loggedin} name={accName} />
        <Balance />
        <Payment />
      </div>
    )
  }
}

export default App