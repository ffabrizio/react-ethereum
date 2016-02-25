import React, {Component} from 'react'

import Dialog from 'material-ui/lib/dialog'
import FlatButton from 'material-ui/lib/flat-button'
import RaisedButton from 'material-ui/lib/raised-button'
import TextField from 'material-ui/lib/text-field';

import Actions from '../actions'

import keys from '../keys.json'

class AuthDialog extends Component {
  
  constructor(props) {
    super(props)
    
    this.state = {
      open: this.props.dialogopen
    }
  }
  
  static propTypes = { 
    dialogopen: React.PropTypes.bool,
    autogen: React.PropTypes.string
  }
  
  handleClose() {
    Actions.closeLoginDialog()
  }

  handleAuth() {
    Actions.login({key: this.state.key, pass: this.state.pass})
    Actions.closeLoginDialog()
  }
  
  handleAutogen() {
    Actions.generateNewKey()
    
    setTimeout(() => {
      this.setState({
        key: this.props.autogen
      })
    }, 50)
  }
  
  handleKeyChange(event) {
    this.setState({
      key: event.target.value
    })
  }
  
  handlePasswordChange(event) {
    this.setState({
      pass: event.target.value
    })
  }
  
  render() {
    
    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this.handleClose.bind(this)}
      />,
      <FlatButton
        label="Import passphrase"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleAuth.bind(this)}
      />
    ]

    return (
      <Dialog
        title="Authorisation"
        actions={actions}
        modal={true}
        open={this.props.dialogopen}
        onRequestClose={this.handleClose.bind(this)}
      >
        <TextField
          floatingLabelText="Your passphrase"
          multiLine={true}
          rows={5}
          value={this.state.key}
          onChange={this.handleKeyChange.bind(this)}
        /> 
        <i onClick={this.handleAutogen.bind(this)} className="material-icons">&#xE800;</i>
        <br />
        <TextField
          floatingLabelText="Your password"
          type='password'
          onChange={this.handlePasswordChange.bind(this)}
        />
      </Dialog>
    )
  }
}

export default AuthDialog