import React, { Component, Fragment } from 'react'

// import CustomSpinner from '../CustomSpinner'
import Ticket from '../Ticket'

let id = 1
class TicketsList extends Component {
  constructor(props) {
    super(props)
    
    this.generateTickets = (displayedTickets, tickets, checkedCheckboxesNames) => {
      let filteredTickets = []
      let localTickets = tickets.map((value)=>{return {...value}})
      if(localTickets.length)
        if(checkedCheckboxesNames.length!==4){
          checkedCheckboxesNames.forEach((value)=>{
            const num = Number(value.trim().split(' ')[0])
            if(isNaN(num)){
              filteredTickets=filteredTickets.concat(localTickets.filter((value)=>{
                const stops = value.segments[0].stops.length+value.segments[1].stops.length
                return stops===0
              }))
            }
            else{
              filteredTickets=filteredTickets.concat(localTickets.filter((value)=>{
                const stops = value.segments[0].stops.length+value.segments[1].stops.length
                return stops===num
              }))
            }
          })        
        } else {
          filteredTickets=localTickets
        }
      let components = []
      for (let i = 0; (i < displayedTickets)&&filteredTickets.length; i++) components.push(<Ticket key={id++} ticket={filteredTickets[i]} />)
      return components
    }
  }
  render() {
    let { displayedTickets, tickets } = this.props.ticketsList
    let {checkedCheckboxesNames}=this.props.stopsCheckboxesNames
    return <Fragment>{this.generateTickets(displayedTickets, tickets, checkedCheckboxesNames)}</Fragment>
  }
}

export default TicketsList
