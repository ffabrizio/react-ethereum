import alt from '../alt'

class Actions {
  
  constructor() {
    
    this.generateActions (
          
      'login',
      'viewaccount',
      'viewtransactions',
      'transfer'
            
    )
        
  }
}

export default alt.createActions(Actions)