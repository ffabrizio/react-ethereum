console.log('main.js')

import React from 'react';
import {render} from 'react-dom';
import Greeter from './components/greeter.jsx';
import Login from './components/login.jsx';
import Payment from './components/payment.jsx';
import Balance from './components/balance.jsx';

import './styles/main.css';

render(
  <main>
    <Greeter />
    <Login />
    <Balance />
    <Payment />
  </main>, 
  document.getElementById('root'));