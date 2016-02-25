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
    this.seed
    
    this.bindActions(Actions)
    
  }
  
  onLogin(args) {
    this.setEtherbase(args, (data) => this.setState({accounts: data}))
  }	
  
  onGenerateNewKey() {
    let s = LightWallet.keystore.generateRandomSeed(this.getEntropy(500))
    this.setState({seed: s});
  }
  
  getEntropy(length) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
    if (! length) {
        length = Math.floor(Math.random() * chars.length);
    }

    var str = '';
    for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}
  
  getHost() {
    return 'http://ethnode.cloudapp.net:8545'
  }
  
  setEtherbase(args, callback) {
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
        callback(data)
        
        this.setState({fetching: false})
      })
    })
  }
  
  getBalances(keystore, callback) { 
    let addresses = keystore.getAddresses()
    let data = []
    
    async.map(addresses, this.web3.eth.getBalance, (err, balances) => {
      async.map(addresses, this.web3.eth.getTransactionCount, (err, nonces) => {
        for (var i=0; i<addresses.length; ++i) {
          data.push ({
            addr: '0x' + addresses[i],
            eth: (balances[i] / 1.0e18),
            nonce: nonces[i],
            //balance: parseInt(token.balanceOf('0x' + addresses[i]).toString(10), 10)
          })
        }
        
        callback(data);
      });
    });  
}
}

export default alt.createStore(AccountStore, 'AccountStore')