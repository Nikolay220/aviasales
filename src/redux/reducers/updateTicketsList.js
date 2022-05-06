import { REQUEST_TICKETS, RECEIVE_TICKETS, INCREASE_DISPLAYED_TICKETS_NUMBER, RECEIVE_OTHER_TICKETS } from '../actions'

export default function updateTicketsList(state = { isFetching: false, tickets: [], displayedTickets: 0 }, action) {
  switch (action.type) {
    case INCREASE_DISPLAYED_TICKETS_NUMBER:
      return Object.assign({}, state, { displayedTickets: state.displayedTickets + 100 })
    case REQUEST_TICKETS:
      return Object.assign({}, state, { isFetching: true })
    case RECEIVE_TICKETS:
      return Object.assign({}, state, { tickets: action.tickets, isFetching: false })
    case RECEIVE_OTHER_TICKETS:
      return Object.assign({}, state, { tickets: state.tickets.concat(action.tickets), isFetching: false })
    default:
      return state
  }
}
