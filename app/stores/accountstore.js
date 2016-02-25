import alt from '../alt'
import async from 'async'
import LightWallet from 'eth-lightwallet'
import Web3 from 'web3'
import HookedWeb3Provider from 'hooked-web3-provider'
import Actions from '../actions'


class AccountStore {
  
  constructor() {

    this.accounts = []
    this.fetching = false
    this.web3
    
    this.bindActions(Actions)
    
  }
  
  onLogin(args) {
    this.setEtherbase(args, (data) => this.setState({accounts: data}))
  }	
  
  getHost() {
    return 'http://ethnode.cloudapp.net:8545'
  }
  
  setEtherbase(args, cb) {
    this.setState({fetching: true})
    
    LightWallet.keystore.deriveKeyFromPassword(args.pass, (err, pwDerivedKey) => {
      let keystore = new LightWallet.keystore(args.key, pwDerivedKey)
      keystore.generateNewAddress(pwDerivedKey, 3)
      
      let ethProvider = new HookedWeb3Provider({
        host: this.getHost(),
        transaction_signer: keystore
      })
      
      this.setState({web3: new Web3(ethProvider)})
      this.getBalances(keystore, (data) => {
        this.setState({fetching: false})
        cb(data)
      })
    })
  }
  
  getBalances(keystore, cb) { 
    let addresses = keystore.getAddresses()
    let data = []
    let web3 = this.web3
    
    async.map(addresses, web3.eth.getBalance, function(err, balances) {
      async.map(addresses, web3.eth.getTransactionCount, function(err, nonces) {
        for (var i=0; i<addresses.length; ++i) {
          data.push ({
            addr: '0x' + addresses[i],
            eth: (balances[i] / 1.0e18),
            nonce: nonces[i],
            //balance: parseInt(token.balanceOf('0x' + addresses[i]).toString(10), 10)
          })
        }
        
        cb(data);
      });
    });  
}
}

export default alt.createStore(AccountStore, 'AccountStore')