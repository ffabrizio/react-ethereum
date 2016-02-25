import React, {Component} from 'react'

import Card from 'material-ui/lib/card/card'
import CardHeader from 'material-ui/lib/card/card-header'
import CardText from 'material-ui/lib/card/card-text'
import Transactions from './transactions'
import keys from '../keys.json'

class Balance extends Component {

  render() {
    let etherbase = { addr: '', eth: '' }
    if (this.props.accounts.length) {
      etherbase = this.props.accounts[0]
    }
    return (
      <Card>
        <CardHeader
          title={etherbase.addr}
          subtitle={etherbase.eth}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          <Transactions />
        </CardText>
      </Card>
    )
  }
}


export default Balance