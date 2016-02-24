import React from 'react'
import {render} from 'react-dom'
import AltContainer from 'alt-container';
import App from './components/app'
import AccountStore from './stores/accountstore'
import './styles/main.css'

render (
  
  <AltContainer 
    stores={[AccountStore]}
    inject={ {
      accounts: () => AccountStore.getState().accounts
    } }>
    <App/>
  </AltContainer>
  
  , document.getElementById('root')
)