import React, {Component} from 'react'
import RefreshIndicator from 'material-ui/lib/refresh-indicator'
import Greeter from './greeter'
import Login from './login'
import Payment from './payment'
import Balance from './balance'
import keys from '../keys.json'
import styles from '../styles/main.css'

class App extends Component {
  
  render() {
    
    let msg = ''
    let loggedin = this.props.accounts.length > 0
    let nodes = []
    
    if (loggedin) {
      msg = 'Welcome back'
      nodes.push (
        <Balance key={keys.components.balance} {...this.props} />,
        <Payment key={keys.components.payment} />
      )
    }
    
    const loadingStyle = {
      display: 'inline-block',
      position: 'relative',
    }
    
    return (
      
      <div>
        <Greeter>
          <Login loggedin={loggedin} msg={msg} {...this.props}/>
        </Greeter>
        
        <RefreshIndicator
          style={loadingStyle}
          size={20}
          left={120}
          top={5}
          status={(this.props.fetching ? "loading" : "hide")}
        />
        
        <div className={styles.main}>
         {nodes}
        </div>
      </div>
      
    )
  }
}

export default App