console.log('main.js')

import React from 'react'
import {render} from 'react-dom'
import App from './components/app'

import './styles/main.css'

render(
  <App />, 
  document.getElementById('root'))