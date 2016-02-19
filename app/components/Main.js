import React, {Component} from 'react'
import Actions from '../actions';
import Greeter from './Greeter';
import Login from './Login';
import Payment from './Payment';
import Balance from './Balance';


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isSignedIn: false
    };
  }

  /**
   * @return {object}
   */
  render() {
    var input;
    if (!this.state.isSignedIn) {
      input =
        <div onClick={this._onLoginClick.bind(this)}>
          Clicks: {this.state.count}
        </div>;
    }
    return (
      <div>
        <Greeter />
        <Login />
        <Balance />
        <Payment />
        {input}
      </div>
    );
  }

  _onLoginClick() {
    this.setState({
      count: this.state.count + 1,
      isSignedIn: true
    });
    
    Actions.login(this.state);
  }

}

export default Main