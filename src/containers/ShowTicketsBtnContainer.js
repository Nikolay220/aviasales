import { connect } from 'react-redux'

import { increaseDisplayedTicketsNumber } from '../redux/actions'
import ShowTicketsBtn from '../components/ShowTicketsBtn'

const mapStateToProps = (state) => {
  return {
    displayedTickets: state.ticketsList.displayedTickets,
    ticketsNumber: state.ticketsList.tickets.length,
    ticketsAreFetching: state.ticketsList.isFetching,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(increaseDisplayedTicketsNumber())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowTicketsBtn)
