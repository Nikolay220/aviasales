import { CHANGE_SORT_FILTER, sortFilters } from '../actions'
export default function updateFilterBtn(state = sortFilters.cheapest, action) {
  switch (action.type) {
    case CHANGE_SORT_FILTER:
      return action.filter
    default:
      return state
  }
}
