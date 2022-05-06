// const changeFilter='change_filter'
import AviasalesApiService from '../../services/AviasalesApiService'
export const change_sort_filter = 'change_sort_filter'
export const update_stops_checkboxes = 'update_stops_checkboxes'
export const update_check_all_checkbox = 'update_check_all_checkbox'

export const sortFilters = {
  cheapest: 'cheapest',
  fastest: 'fastest',
  optimal: 'optimal',
}

export function changeSortFilter(filter) {
  return { type: change_sort_filter, filter }
}

export function updateStopsCheckboxes(checkboxes) {
  return { type: update_stops_checkboxes, checkboxes }
}

export function updateCheckAllCheckbox(checkbox) {
  return { type: update_check_all_checkbox, checkbox }
}

export const INCREASE_DISPLAYED_TICKETS_NUMBER = 'INCREASE_DISPLAYED_TICKETS_NUMBER'
export function increaseDisplayedTicketsNumber() {
  return { type: INCREASE_DISPLAYED_TICKETS_NUMBER }
}

export const REQUEST_TICKETS = 'REQUEST_TICKETS'
function requestTickets() {
  return {
    type: REQUEST_TICKETS,
  }
}

export const RECEIVE_TICKETS = 'RECEIVE_TICKETS'
function receiveTickets(tickets) {
  return {
    type: RECEIVE_TICKETS,
    tickets,
  }
}

export const RECEIVE_OTHER_TICKETS = 'RECEIVE_OTHER_TICKETS'
function receiveOtherTickets(tickets) {
  return {
    type: RECEIVE_OTHER_TICKETS,
    tickets,
  }
}
const apiService = new AviasalesApiService()

async function getFirstAndOthers(dispatch) {
  const searchId = await apiService.getSearchId()
  dispatch(requestTickets())
  const firstBundle = await apiService.getTickets(searchId)
  dispatch((dispatch) => dispatch(receiveTickets(firstBundle.tickets)))
  dispatch((dispatch) => dispatch(increaseDisplayedTicketsNumber()))
  dispatch((dispatch) => dispatch(requestTickets()))
  const others = await apiService.getAllTickets(searchId, firstBundle.stop)
  dispatch(receiveOtherTickets(others))
}

// async function getFirst(dispatch){
//   dispatch(requestTickets())
//   const searchId = await apiService.getSearchId()
//   const firstBundle = await apiService.getTickets(searchId)
//   dispatch(receiveTickets(firstBundle.tickets))

// }

function fetchTickets() {
  return (dispatch) => {
    getFirstAndOthers(dispatch)
    // dispatch(requestTickets())
    // apiService.getSearchId().then((searchId) => {
    //   return apiService.getTickets(searchId).then((data) => {dispatch(receiveTickets(data.tickets))})
    // })
    // return apiService.getAllTickets().then((tickets) => {
    //   dispatch(receiveTickets(tickets))
    // })
  }
}

// function shouldFetchTickets(state) {
//   const ticketList = state.ticketsList
//   if (ticketList.tickets.length === 0) {
//     return true
//   } else if (ticketList.isFetching) {
//     return false
//   } else if (ticketList.tickets.length < ticketList.displayedTickets) {
//     return true
//   }
//   return false
// }

export function fetchTicketsIfNeeded() {
  return (dispatch) => {
    // dispatch(increaseDisplayedTicketsNumber())
    // if (shouldFetchTickets(getState())) {
    return dispatch(fetchTickets())
    // }
  }
}
