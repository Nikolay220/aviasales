import { connect } from 'react-redux'

import { updateStopsCheckboxes, updateCheckAllCheckbox, stopsFilters } from '../redux/actions'
import StopsFiltersPanel from '../components/StopsFiltersPanel'
const plainOptions = Object.values(stopsFilters)
const mapStateToProps = (state) => {
  return {
    checkAll: state.stopsCheckboxesNames.checkedAllCheckbox,
    plainOptions,
    checkedList: state.stopsCheckboxesNames.checkedCheckboxesNames,
    ticketsAreFetching: state.ticketsList.isFetching,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (list) => {
      dispatch(updateStopsCheckboxes(list))
      dispatch(updateCheckAllCheckbox(list.length === plainOptions.length))
    },
    onCheckAllChange: (e) => {
      dispatch(updateStopsCheckboxes(e.target.checked ? plainOptions : []))
      dispatch(updateCheckAllCheckbox(e.target.checked))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StopsFiltersPanel)
