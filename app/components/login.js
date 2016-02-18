import React, {Component} from 'react'
import LoginActions from '../actions/loginactions'
import LoginStore from '../stores/loginstore'
import keys from '../keys.json';

class Login extends Component{

  render() {
    var all, loginBtn, regBtn;
    if (this.props.loggedin !== true) {
      loginBtn = <button onClick={this.loginClick}>Login</button>;
      regBtn = <button onClick={this.regClick}>Register</button>;
      all = <span>{loginBtn} | {regBtn}</span>
    } else {
      all = <span>Welcome {this.props.name}</span>
    }
    return (
      <span>{all}</span>
    );
  }
  
  loginClick() {
    LoginActions.login({name: 'John'})
  }
  
  regClick() {
    LoginActions.register({name: 'Jack'})
  }
}


Login.propTypes = { loggedin: React.PropTypes.bool, name: React.PropTypes.string };
export default Login