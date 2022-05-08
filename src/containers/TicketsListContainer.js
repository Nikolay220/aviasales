import { connect } from 'react-redux'

import { updateError } from '../redux/actions'
import TicketsList from '../components/TicketsList'

const mapStateToProps = (state) => {
  return {
    ticketsList: state.ticketsList,
    stopsCheckboxesNames: state.stopsCheckboxesNames,
    error: state.error,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onClose: () => {
      dispatch(updateError(null))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketsList)
