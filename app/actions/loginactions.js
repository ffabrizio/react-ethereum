import alt from '../alt';

class LoginActions {
  constructor() {
        this.generateActions(
            'supdate',
            'login',
            'register'
        );
    }
}

export default alt.createActions(LoginActions);