import updateFilterBtn from './updateFilterBtn'
import updateStopsCheckboxes from './updateStopsCheckboxes'
import updateTicketsList from './updateTicketsList'
export default function app(state = {}, action) {
  return {
    sortFilter: updateFilterBtn(state.sortFilter, action),
    stopsCheckboxes: updateStopsCheckboxes(state.stopsCheckboxes, action),
    ticketsList: updateTicketsList(state.ticketsList, action),
  }
}
