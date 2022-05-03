import { update_stops_checkboxes, update_check_all_checkbox } from '../actions'
export default function updateStopsCheckboxes(state = { checkedCheckboxes: [], checkedAllCheckbox: false }, action) {
  switch (action.type) {
    case update_stops_checkboxes:
      return { checkedCheckboxes: action.checkboxes, checkedAllCheckbox: state.checkedAllCheckbox }
    case update_check_all_checkbox:
      return { checkedCheckboxes: state.checkedCheckboxes, checkedAllCheckbox: action.checkbox }
    default:
      return state
  }
}
