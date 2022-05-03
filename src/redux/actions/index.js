// const changeFilter='change_filter'

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
