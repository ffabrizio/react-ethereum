import Web3 from 'web3'
import HookedWeb3Provider from 'hooked-web3-provider'
import lightwallet from 'eth-lightwallet';
import async from 'async';
import Actions from '../actions'


export default {
  authorize: {
      remote(state, args) {
       return [1,2,3]
      }
      
      , local(state, args) {
        return state.results[state.value] ? state.results : null
      }
      
      , loading: Actions.loadingAccount
      , success: Actions.loadedAccount
      , error: Actions.error
      
      , shouldFetch(state) {
        return true
      }
    
  }
}
