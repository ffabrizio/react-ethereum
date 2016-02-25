import React from 'react'
import {render} from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import AltContainer from 'alt-container';
import AccountStore from './stores/accountstore'
import LoginDialogStore from './stores/logindialogstore'
import App from './components/app'
import Actions from './actions'

injectTapEventPlugin()

render (
  
  <AltContainer 
    stores={[AccountStore, LoginDialogStore]}
    inject={{
      
      autogen: () => AccountStore.getState().seed,
      accounts: () => AccountStore.getState().accounts,
      fetching: () => AccountStore.getState().fetching,
      dialogopen: () => LoginDialogStore.getState().open
      
    }}>
    <App/>
  </AltContainer>
  
  , document.getElementById('root')
)

window.action = Actions