import alt from '../alt';
import LoginActions from '../actions/loginactions';

class LoginStore {
  
  constructor() {
    
    this.bindActions(LoginActions);
    
    this.accounts = [];
    this.loggedin = false;
  }
  
   onLogin(login) {
      
        this.accounts.push({name: login.name});
        this.loggedin = true;
    }
    
    onRegister(reg) {
      
        this.accounts.push({name: reg.name});
        this.loggedin = true;
    }
}

export default alt.createStore(LoginStore, 'LoginStore');