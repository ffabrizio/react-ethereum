import alt from '../alt';

class LoginActions {
  constructor() {
        this.generateActions(
            'update',
            'login'
        );
    }
}

export default alt.createActions(LoginActions);