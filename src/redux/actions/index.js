import AviasalesApiService from '../../services/AviasalesApiService'
export const CHANGE_SORT_FILTER = 'CHANGE_SORT_FILTER'
export const UPDATE_STOPS_CHECKBOXES = 'UPDATE_STOPS_CHECKBOXES'
export const UPDATE_CHECK_ALL_CHECKBOX = 'UPDATE_CHECK_ALL_CHECKBOX'

export const sortFilters = {
  cheapest: 'cheapest',
  fastest: 'fastest',
  optimal: 'optimal',
}

export const stopsFilters = {
  noStops: 'Без пересадок',
  oneStop: '1 пересадка',
  twoStops: '2 пересадки',
  threeStops: '3 пересадки',
}

export function changeSortFilter(filter) {
  return { type: CHANGE_SORT_FILTER, filter }
}

export function updateStopsCheckboxes(checkedCheckboxesNames) {
  return { type: UPDATE_STOPS_CHECKBOXES, checkedCheckboxesNames }
}

export function updateCheckAllCheckbox(isChecked) {
  return { type: UPDATE_CHECK_ALL_CHECKBOX, isChecked }
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
  dispatch((dispatch, getState) => {
    dispatch(receiveTickets(firstBundle.tickets))
    dispatch(changeSortFilter(getState().sortFilter))
  })
  dispatch((dispatch) => dispatch(increaseDisplayedTicketsNumber()))
  dispatch((dispatch) => dispatch(requestTickets()))
  const others = await apiService.getAllTickets(searchId, firstBundle.stop)
  dispatch((dispatch, getState) => {
    dispatch(receiveOtherTickets(others))
    dispatch(changeSortFilter(getState().sortFilter))
  })
}

function fetchTickets() {
  return (dispatch) => {
    getFirstAndOthers(dispatch)
  }
}

export function fetchTicketsIfNeeded() {
  return (dispatch) => {
    return dispatch(fetchTickets())
  }
}
