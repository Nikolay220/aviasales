import { UPDATE_STOPS_CHECKBOXES, UPDATE_CHECK_ALL_CHECKBOX, stopsFilters } from '../actions'
export default function updateStopsCheckboxes(state = { checkedCheckboxesNames: Object.values(stopsFilters), checkedAllCheckbox: true }, action) {
  switch (action.type) {
    case UPDATE_STOPS_CHECKBOXES:
      return { checkedCheckboxesNames: action.checkedCheckboxesNames, checkedAllCheckbox: state.checkedAllCheckbox }
    case UPDATE_CHECK_ALL_CHECKBOX:
      return { checkedCheckboxesNames: state.checkedCheckboxesNames, checkedAllCheckbox: action.isChecked }
    default:
      return state
  }
}
