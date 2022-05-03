import { connect } from 'react-redux'

import { updateStopsCheckboxes, updateCheckAllCheckbox } from '../redux/actions'
import StopsFiltersPanel from '../components/StopsFiltersPanel'
const plainOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']
const mapStateToProps = (state) => {
  return {
    checkAll: state.stopsCheckboxes.checkedAllCheckbox,
    plainOptions,
    checkedList: state.stopsCheckboxes.checkedCheckboxes,
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
