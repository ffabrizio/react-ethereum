console.log('main.js')

import React from 'react';
import {render} from 'react-dom';
import Greeter from './components/greeter';
import Login from './components/login';
import Payment from './components/payment';
import Balance from './components/balance';

import './styles/main.css';

render(
  <main>
    <Greeter />
    <Login />
    <Balance />
    <Payment />
  </main>, 
  document.getElementById('root'));