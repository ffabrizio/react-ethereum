import alt from '../alt';

class AppActions {
  update(data) {
    return data;
  }
  
  fetch() {
    return (dispatch) => {
    // we dispatch an event here so we can have "loading" state.
      dispatch();
      this.update({ name: 'default'});
    }
  }
}

export default alt.createActions(AppActions);