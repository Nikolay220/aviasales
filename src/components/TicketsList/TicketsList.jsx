import React, { Component, Fragment } from 'react'

import Ticket from '../Ticket'

let ticketsNumber = 5
class TicketsList extends Component {
  constructor(props) {
    super(props)
    this.generateTickets = () => {
      let tickets = []
      while (ticketsNumber--) tickets.push(<Ticket />)
      return tickets
    }
  }
  render() {
    return <Fragment>{this.generateTickets()}</Fragment>
  }
}

export default TicketsList
