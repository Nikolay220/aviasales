import React, { Component, Fragment } from 'react'

// import CustomSpinner from '../CustomSpinner'
import Ticket from '../Ticket'

let id = 1
class TicketsList extends Component {
  constructor(props) {
    super(props)

    this.generateTickets = (displayedTickets, tickets) => {
      let components = []
      for (let i = 0; i < displayedTickets; i++) components.push(<Ticket key={id++} ticket={tickets[i]} />)
      return components
    }
  }
  render() {
    let { displayedTickets, isFetching, tickets } = this.props.ticketsList
    if (!isFetching) return <Fragment>{this.generateTickets(displayedTickets, tickets)}</Fragment>
  }
}

export default TicketsList
