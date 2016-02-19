import alt from '../alt'

class Actions {
  
  constructor() {
    
        this.generateActions (
          
            'login',
            'register',
            'viewaccount',
            'viewtransactions',
            'transfer'
            
        )
        
    }
}

export default alt.createActions(Actions)