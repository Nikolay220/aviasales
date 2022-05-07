import { connect } from 'react-redux'

import { changeSortFilter } from '../redux/actions'
import SortFilters from '../components/SortFilters'

const mapStateToProps = (state) => {
  return { curFilter: state.sortFilter, ticketsAreFetching: state.ticketsList.isFetching }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (filter) => {
      dispatch(changeSortFilter(filter))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortFilters)
