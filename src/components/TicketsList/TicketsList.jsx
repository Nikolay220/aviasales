import React, { Component, Fragment } from 'react'
import { Alert } from 'antd'

import Ticket from '../Ticket'

let id = 1
class TicketsList extends Component {
  constructor(props) {
    super(props)
    this.shownTicketsExist=true
    this.generateTickets = (displayedTickets, tickets, checkedCheckboxesNames) => {
      let filteredTickets = []
      let localTickets = tickets.map((value) => {
        return { ...value }
      })
      if (localTickets.length)
        if (checkedCheckboxesNames.length !== 4) {
          checkedCheckboxesNames.forEach((value) => {
            const num = Number(value.trim().split(' ')[0])
            if (isNaN(num)) {
              filteredTickets = filteredTickets.concat(
                localTickets.filter((value) => {
                  const stops = value.segments[0].stops.length
                  return stops === 0
                })
              )
            } else {
              filteredTickets = filteredTickets.concat(
                localTickets.filter((value) => {
                  const stops = value.segments[0].stops.length
                  return stops === num
                })
              )
            }
          })
        } else {
          filteredTickets = localTickets
        }
      let components = []
      for (let i = 0; i < displayedTickets && filteredTickets.length; i++) components.push(<Ticket key={id++} ticket={filteredTickets[i]} />)
      this.shownTicketsExist = components.length?true:false
      return components
    }
  }
  render() {
    let { displayedTickets, tickets } = this.props.ticketsList
    let { checkedCheckboxesNames } = this.props.stopsCheckboxesNames
    let { error, onClose } = this.props

    return (
      <Fragment>
        {error && (
          <Alert
            style={{ maxWidth: '504px', position: 'fixed', zIndex: '20', top: '10px' }}
            message="Error"
            description={'Recommendations: ' + error.checksRecommendations + '. Mess:' + error.message + '.  Error name: ' + error.name + '.  Error stack: ' + error.stack}
            type="error"
            error={error.message}
            banner
            closable
            onClose={onClose}
          />
        )}
        {this.generateTickets(displayedTickets, tickets, checkedCheckboxesNames)}
        {!this.shownTicketsExist&&<Alert style={{ maxWidth: '504px', marginBottom:'10px', backgroundColor:'#f5f5f5', textAlign:'center', borderColor:'#1890ff45'}} message="Рейсов, подходящих под заданные фильтры, не найдено" type="success" />}
      </Fragment>
    )
  }
}

export default TicketsList
