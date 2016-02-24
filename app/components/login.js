import React, {Component} from 'react'
import AccountStore from '../stores/accountstore'
import Actions from '../actions'
import keys from '../keys.json'
import styles from '../styles/login.css'


class Login extends Component {
  
  static propTypes = { 
  
    loggedin: React.PropTypes.bool, 
    name: React.PropTypes.string,
    fetching: React.PropTypes.bool
  }

  render() {
    
    let wrapper
    let loginBtn
    let regBtn

    if (!this.props.loggedin) {

      loginBtn = <button onClick={this.loginClick}>Login</button>
      wrapper = <span>{loginBtn} {regBtn}</span>
      
    } else {
      
      wrapper = <span>{this.props.msg}</span>
    
    }
    
    return (
      <div className={styles.wrapper}>
        <span className={(this.props.fetching ? styles.show : styles.hide)}>Loading ...</span>
        {wrapper}
      </div>
      
    )
  }
  
  loginClick() {
    
    Actions.login({input: 'x'})
    
  }
}

export default Login