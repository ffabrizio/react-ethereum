import React, {Component} from 'react'
import AccountStore from '../stores/accountstore'
import Actions from '../actions'
import keys from '../keys.json'

class Login extends Component {

  render() {
    
    let wrapper
    let loginBtn
    let regBtn

    if (!this.props.loggedin) {

      loginBtn = <button onClick={this.loginClick}>Login</button>
      regBtn = <button onClick={this.registerClick}>Register</button>
      wrapper = <span>{loginBtn} | {regBtn}</span>
      
    } else {
      
      wrapper = <span>{this.props.msg}</span>
    
    }
    
    return (
      <div>
        {wrapper}
      </div>
      
    );
  }
  
  loginClick() {
    
    Actions.login({name: 'John'})
    
  }
  
  registerClick() {
    
    Actions.register({name: 'Jack'})
    
  }
}

Login.propTypes = { 
  
  loggedin: React.PropTypes.bool, 
  name: React.PropTypes.string 
  
 }

export default Login