/* global $ */
import alt from '../alt'
import Actions from '../actions'

class AccountStore {
  constructor() {

    this.accounts = []
    this.fetching = false
    this.bindActions(Actions)
    
  }
  
  onLogin(args) {
    this.fetch(args, (data) => this.setState({accounts: [data]}))
  }	
  
  fetch(args, cb) {
    this.setState({fetching: true})
    $.get(
      'http://jsonplaceholder.typicode.com/posts/1', 
      (data) => {
        this.setState({fetching: false})
        cb(data)
      })
  }
}

export default alt.createStore(AccountStore, 'AccountStore')