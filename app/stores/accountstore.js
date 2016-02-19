import alt from '../alt'
import Actions from '../actions'

class AccountStore {
  
  constructor() {

    this.accounts = []
    
    this.bindActions(Actions)
    
  }
  
  onLogin(args) {

    this.accounts.push({name: args.name})
    
  }	
      
  onRegister(args) {

    this.accounts.push({name: args.name})
        
  }
}

export default alt.createStore(AccountStore, 'AccountStore')