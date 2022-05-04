import { connect } from 'react-redux'

import TicketsList from '../components/TicketsList'

const mapStateToProps = (state) => {
  return {
    ticketsList: state.ticketsList,
  }
}

export default connect(mapStateToProps)(TicketsList)
