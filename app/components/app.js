import React, {Component} from 'react'
import Greeter from './greeter'
import Login from './login'
import Payment from './payment'
import Balance from './balance'
import AppActions from '../actions'
import AppStore from '../stores'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = AppStore.getState();
  }
  
  componentDidMount() {
    AppStore.listen(this.onChange.bind(this));
    AppActions.fetch();
  }
  
  componentWillUnmount() {
    AppStore.unlisten(this.onChange);
  }
  
  onChange(state) {
    this.setState(state);
    console.log(state)
  }
  
  click() {
    AppActions.update([2,5,6])
  }
  
  render() {
    return (
      <div>
        <Greeter />
        <Login />
        <Balance />
        <Payment />
        <button onClick={this.click} />
      </div>
    )
  }
}

export default App