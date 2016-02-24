/* global $ */
import alt from '../alt'
import Actions from '../actions'

class AccountStore {
  
  constructor() {

    this.accounts = []
    this.bindActions(Actions)
    
  }
  
  onLogin(args) {
    this.test(args, (data) => this.setState({accounts: [data]}))
  }	
  
  test(args, cb) {
    $.get(
      'http://jsonplaceholder.typicode.com/posts/1', 
      (data) => {
        cb(data)
      })

  }
      
  onRegister(args) {

    this.accounts.push({name: args.name})
        
  }
}

export default alt.createStore(AccountStore, 'AccountStore')