import React, {Component} from 'react'
import RaisedButton from 'material-ui/lib/raised-button'
import AuthDialog from './authdialog'

import Actions from '../actions'
import keys from '../keys.json'
import styles from '../styles/login.css'


class Login extends Component {
  
  constructor(props) {
    super(props)
    
    this.state = {
      open: false
    }
  }
  
  render() {
    let wrapper
    let loginBtn
    let regBtn

    if (!this.props.loggedin) {

      loginBtn = <RaisedButton onClick={this.loginClick.bind(this)} label="Authorise" disabled={this.props.fetching} />
      wrapper = <span>{loginBtn} {regBtn}</span>
      
    } else {
      
      wrapper = <span>{this.props.msg}</span>
    
    }
    
    return (
      <div className={styles.wrapper}>
        {wrapper}
        <AuthDialog {...this.props} />
      </div>
      
    )
  }
  
  loginClick() {
    
    Actions.openLoginDialog();
  }
}

export default Login