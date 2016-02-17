import React, {Component} from 'react'
import keys from '../keys.json';

class Transactions extends Component{
  render() {
    return (
      <div>
        <h4>Transactions</h4>
        <ul>
          <li>
            {keys.transactions.date}: xxxxxxxxxxxxxxxx <br />
            {keys.transactions.from}: xx <br />
            {keys.transactions.value}: xxxxxxx <br />
            {keys.transactions.status[1]}
          </li>
          <li>
            {keys.transactions.date}: xxxxxxxxxxxxxxxx <br />
            {keys.transactions.to}: xx <br />
            {keys.transactions.value}: xxxxxxx <br />
            {keys.transactions.status[0]}
          </li>
        </ul>
      </div>
    );
  }
}

export default Transactions