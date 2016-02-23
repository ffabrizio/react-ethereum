import React, {Component} from 'react'

import RaisedButton from 'material-ui/lib/raised-button'
import FontIcon from 'material-ui/lib/font-icon'

import AuthDialog from './authdialog'

import keys from '../keys.json'

import styles from '../styles/login.css'


class Login extends Component {
  
  render() {
    
    let wrapper

    if (!this.props.loggedin) {

      wrapper = <RaisedButton label="Authorise" secondary={true} onTouchTap={this.handleAuth.bind(this)} />
      
    } else {
      
      wrapper = <span>{this.props.msg}</span>
    
    }
    
    return (
      <div className={styles.wrapper}>
        {wrapper}
        <AuthDialog ref='authdialog' />
      </div>
      
    );
  }
  
  handleAuth() {

    this.refs.authdialog.handleOpen()
    
  }
}

Login.propTypes = { 
  
  loggedin: React.PropTypes.bool, 
  name: React.PropTypes.string 
  
 }

export default Login