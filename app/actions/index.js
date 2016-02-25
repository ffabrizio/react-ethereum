import alt from '../alt'

class Actions {
  
  constructor() {
    
    this.generateActions (
          
      'openLoginDialog',
      'closeLoginDialog',
      'login',
      'createNewAccount',
      'viewAccount',
      'viewTransactions',
      'transfer'
            
    )
        
  }
}

export default alt.createActions(Actions)