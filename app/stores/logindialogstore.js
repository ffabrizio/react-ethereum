import alt from '../alt'
import Actions from '../actions'

class LoginDialogStore {

  constructor() {

    this.open = false
    this.bindActions(Actions)
 
  }
  onOpenLoginDialog() {
    this.setState({open: true})
  }	
  
  onCloseLoginDialog() {
    this.setState({open: false})
  }	
}

export default alt.createStore(LoginDialogStore, 'LoginDialogStore')