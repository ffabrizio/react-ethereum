import dispatcher from '../dispatcher';
import constants from '../constants';

class Actions {
  
  static login(args) {
    dispatcher.dispatch(
      { type: constants.CHAIN_LOGIN, args }
    );
  }
  
}

export default Actions;