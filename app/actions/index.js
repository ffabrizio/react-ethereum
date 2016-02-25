import alt from '../alt'

class Actions {
  
  constructor() {
    
    this.generateActions (
          
      'openLoginDialog',
      'closeLoginDialog',
      'login',
      'generateNewKey',
      'viewAccount',
      'viewTransactions',
      'transfer'
            
    )
        
  }
}

export default alt.createActions(Actions)