import { change_sort_filter, sortFilters } from '../actions'
export default function updateFilterBtn(state = sortFilters.cheapest, action) {
  switch (action.type) {
    case change_sort_filter:
      return action.filter
    default:
      return state
  }
}
