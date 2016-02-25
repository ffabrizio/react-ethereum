import React, {Component} from 'react'
import Table from 'material-ui/lib/table/table'
import TableHeaderColumn from 'material-ui/lib/table/table-header-column'
import TableRow from 'material-ui/lib/table/table-row'
import TableHeader from 'material-ui/lib/table/table-header'
import TableRowColumn from 'material-ui/lib/table/table-row-column'
import TableBody from 'material-ui/lib/table/table-body'
import Transactions from './transactions'

import keys from '../keys.json'

class Balance extends Component {
  static propTypes = { 
    accounts: React.PropTypes.array
  }
  
  render() {
    let rows = [];
    this.props.accounts.forEach(function(account) {
      rows.push(
        <TableRow key={account.addr}>
          <TableRowColumn>{account.addr}</TableRowColumn>
          <TableRowColumn>{account.eth}</TableRowColumn>
        </TableRow>
      )
    })
    return (
      <div>
        <h4>Balance</h4>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>{keys.balance.address}</TableHeaderColumn>
              <TableHeaderColumn>{keys.balance.value}</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows}
          </TableBody>
        </Table>
        <Transactions />
      </div>
    )
  }
}


export default Balance