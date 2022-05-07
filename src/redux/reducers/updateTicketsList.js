import { REQUEST_TICKETS, RECEIVE_TICKETS, INCREASE_DISPLAYED_TICKETS_NUMBER, RECEIVE_OTHER_TICKETS, CHANGE_SORT_FILTER, sortFilters } from '../actions'

export default function updateTicketsList(state = { isFetching: false, tickets: [], displayedTickets: 0 }, action) {
  switch (action.type) {
    case INCREASE_DISPLAYED_TICKETS_NUMBER:
      return Object.assign({}, state, { displayedTickets: state.displayedTickets + 5 })
    case REQUEST_TICKETS:
      return Object.assign({}, state, { isFetching: true })
    case RECEIVE_TICKETS:
      return Object.assign({}, state, { tickets: action.tickets, isFetching: false })
    case RECEIVE_OTHER_TICKETS:
      return Object.assign({}, state, { tickets: state.tickets.concat(action.tickets), isFetching: false })
    case CHANGE_SORT_FILTER: {
      const localTickets = state.tickets.map((value) => {
        return { ...value }
      })
      if (action.filter === sortFilters.cheapest) localTickets.sort((a, b) => a.price - b.price)
      if (action.filter === sortFilters.fastest)
        localTickets.sort((a, b) => {
          const duration_a = a.segments[0].duration + a.segments[1].duration
          const duration_b = b.segments[0].duration + b.segments[1].duration
          return duration_a - duration_b
        })
      if (action.filter === sortFilters.optimal)
        localTickets.sort((a, b) => {
          const duration_a = a.segments[0].duration + a.segments[1].duration
          const duration_b = b.segments[0].duration + b.segments[1].duration
          const average_a = (duration_a + a.price) / 2
          const average_b = (duration_b + b.price) / 2
          return average_a - average_b
        })
      return { ...state, ...{ tickets: localTickets } }
    }
    // case UPDATE_STOPS_CHECKBOXES:{
    //   let filteredTickets = []
    //   let localTickets = state.tickets.map((value)=>{return {...value}})
    //   if(action.checkedCheckboxesNames.length!==4){
    //     action.checkedCheckboxesNames.forEach((value)=>{
    //       const num = Number(value.trim().split(' ')[0])
    //       if(isNaN(num)){
    //         filteredTickets.push(localTickets.filter((value)=>{
    //           const stops = value.segments[0].stops.length+value.segments[1].stops.length
    //           return stops===0
    //         }))
    //       }
    //       else{
    //         filteredTickets.push(localTickets.filter((value)=>{
    //           const stops = value.segments[0].stops.length+value.segments[1].stops.length
    //           return stops===num
    //         }))
    //       }
    //     })
    //     return {...state,...{tickets:filteredTickets}}
    //   } else {

    //   }
    // }
    default:
      return state
  }
}
