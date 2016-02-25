import React, {Component} from 'react'
import Table from 'material-ui/lib/table/table'
import TableHeaderColumn from 'material-ui/lib/table/table-header-column'
import TableRow from 'material-ui/lib/table/table-row'
import TableHeader from 'material-ui/lib/table/table-header'
import TableRowColumn from 'material-ui/lib/table/table-row-column'
import TableBody from 'material-ui/lib/table/table-body'
import keys from '../keys.json'

class Transactions extends Component {
  
  render() {
    
    return (
      <div>
        <h4>Transactions</h4>
        <Table selectable={false}>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>{keys.transactions.date}</TableHeaderColumn>
              <TableHeaderColumn>{keys.transactions.from}</TableHeaderColumn>
              <TableHeaderColumn>{keys.transactions.value}</TableHeaderColumn>
              <TableHeaderColumn></TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableRowColumn>xxxxxxxxxxxxxxxx</TableRowColumn>
              <TableRowColumn>xxxxxxxxxxxxxxxx</TableRowColumn>
              <TableRowColumn>xxxxxxxxxxxxxxxx</TableRowColumn>
              <TableRowColumn>{keys.transactions.status[0]}</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>xxxxxxxxxxxxxxxx</TableRowColumn>
              <TableRowColumn>xxxxxxxxxxxxxxxx</TableRowColumn>
              <TableRowColumn>xxxxxxxxxxxxxxxx</TableRowColumn>
              <TableRowColumn>{keys.transactions.status[1]}</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>

      </div>
    )
  }
}

export default Transactions