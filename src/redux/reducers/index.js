import updateFilterBtn from './updateFilterBtn'
import updateStopsCheckboxes from './updateStopsCheckboxes'
import updateTicketsList from './updateTicketsList'
export default function app(state = {}, action) {
  return {
    sortFilter: updateFilterBtn(state.sortFilter, action),
    stopsCheckboxesNames: updateStopsCheckboxes(state.stopsCheckboxesNames, action),
    ticketsList: updateTicketsList(state.ticketsList, action),
  }
}
