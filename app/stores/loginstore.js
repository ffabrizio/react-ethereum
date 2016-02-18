import alt from '../alt';
import LoginActions from '../actions/loginactions';

class LoginStore {
  
  constructor() {
    
    this.bindActions(LoginActions);
    this.data = [];
    
  }
  
   onLogin(data) {
      
        this.data = {
          loggedin : true,
          balances: data
        };
    }
}

export default alt.createStore(LoginStore, 'LoginStore');