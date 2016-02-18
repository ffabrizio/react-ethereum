import alt from '../alt';
import AppActions from '../actions/appactions';

class AppStore {
  constructor() {
    this.data = {};
    
    this.bindListeners({
      handleUpdate: AppActions.UPDATE,
      handleFetch: AppActions.FETCH
    });
  }
  
  handleUpdate(data) {
    this.data = data;
  }
  
  handleFetch() {
    this.data = [];
  }
}

export default alt.createStore(AppStore, 'AppStore');