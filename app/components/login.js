import React, {Component} from 'react'
import RaisedButton from 'material-ui/lib/raised-button'
import RefreshIndicator from 'material-ui/lib/refresh-indicator'
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
    
    const loadingStyle = {
      display: 'inline-block',
      position: 'relative',
    }
    
    let wrapper
    let loginBtn
    let regBtn

    if (!this.props.loggedin) {

      loginBtn = <RaisedButton onClick={this.loginClick} label="Login" />
      wrapper = <span>{loginBtn} {regBtn}</span>
      
    } else {
      
      wrapper = <span>{this.props.msg}</span>
    
    }
    
    return (
      <div className={styles.wrapper}>
        {wrapper}
        <RefreshIndicator
            style={loadingStyle}
            size={20}
            left={20}
            top={10}
            status={(this.props.fetching ? "loading" : "hide")}
          />
      </div>
      
    )
  }
  
  loginClick() {
    
    Actions.login({input: 'x'})
    
  }
}

export default Login