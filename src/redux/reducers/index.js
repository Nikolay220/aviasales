import updateFilterBtn from './updateFilterBtn'
import updateStopsCheckboxes from './updateStopsCheckboxes'
export default function app(state = {}, action) {
  return {
    sortFilter: updateFilterBtn(state.sortFilter, action),
    stopsCheckboxes: updateStopsCheckboxes(state.stopsCheckboxes, action),
  }
}
