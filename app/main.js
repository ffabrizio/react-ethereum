import React from 'react'
import {render} from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import AltContainer from 'alt-container';
import AccountStore from './stores/accountstore'
import App from './components/app'

import './styles/main.css'

injectTapEventPlugin()

render (
  
  <AltContainer 
    stores={[AccountStore]}
    inject={{
      
      accounts: () => AccountStore.getState().accounts,
      fetching: () => AccountStore.getState().fetching
      
    }}>
    <App/>
  </AltContainer>
  
  , document.getElementById('root')
)