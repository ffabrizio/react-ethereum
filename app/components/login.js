import React, {Component} from 'react'
import RaisedButton from 'material-ui/lib/raised-button'
import RefreshIndicator from 'material-ui/lib/refresh-indicator'
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
  
  static propTypes = { 
  
    loggedin: React.PropTypes.bool, 
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

      loginBtn = <RaisedButton onClick={this.loginClick.bind(this)} label="Login" />
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
          
          <AuthDialog dialogopen={this.props.dialogopen} />
      </div>
      
    )
  }
  
  loginClick() {
    
    Actions.openLoginDialog();
  }
}

export default Login