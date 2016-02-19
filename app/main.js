console.log('main.js')

import React from 'react';
import Main from './components/Main';
import {render} from 'react-dom';
import dispatcher from './dispatcher';

import './styles/main.css';
dispatcher.dispatch('APP_INIT');

render(
  <Main />, 
  document.getElementById('root'));