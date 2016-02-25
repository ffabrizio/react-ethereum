import React, {Component} from 'react'

import Dialog from 'material-ui/lib/dialog'
import FlatButton from 'material-ui/lib/flat-button'
import RaisedButton from 'material-ui/lib/raised-button'
import TextField from 'material-ui/lib/text-field';

import AccountStore from '../stores/accountstore'
import Actions from '../actions'

import keys from '../keys.json'

class AuthDialog extends Component {
  
  
  constructor(props) {
    super(props)
    
    this.state = {
      open: false
    }
    
  }
  
  handleOpen() {
    this.setState({open: true});
  }
  
  handleClose() {
    this.setState({open: false});
  }

  handleAuth() {
    console.log(this.state)
    Actions.login({key: this.state.key, pass: this.state.pass})
    this.setState({open: false});
  }
  
  handleKeyChange(event) {
    this.setState({
      key: event.target.value,
    });
  };
  
  handlePasswordChange(event) {
    this.setState({
      pass: event.target.value,
    });
  };
  
  render() {
    
    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this.handleClose.bind(this)}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleAuth.bind(this)}
      />
    ];

    return (
      <Dialog
        title="Authorisation"
        actions={actions}
        modal={true}
        open={this.state.open}
        onRequestClose={this.handleClose.bind(this)}
      >
        <TextField
          floatingLabelText="Your secure key"
          multiLine={true}
          rows={5}
          onChange={this.handleKeyChange.bind(this)}
        />
        <br />
        <TextField
          floatingLabelText="Your password"
          onChange={this.handlePasswordChange.bind(this)}
        />
      </Dialog>
    )
  }
}

export default AuthDialog