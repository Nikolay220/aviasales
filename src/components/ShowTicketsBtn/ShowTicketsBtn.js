import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'

import CustomSpinner from '../CustomSpinner'

import classes from './ShowTicketsBtn.module.scss'

let ShowTicketsBtn = ({ onClick, displayedTickets, ticketsNumber, ticketsAreFetching }) => {
  return (
    <Button
      onClick={() => {
        onClick()
      }}
      block="true"
      type="primary"
      className={classes['btn']}
      disabled={displayedTickets >= ticketsNumber}
    >
      {displayedTickets < ticketsNumber ? 'показать ещё 5 билетов!' : ticketsAreFetching ? <CustomSpinner /> : 'билетов больше нет'}
    </Button>
  )
}

ShowTicketsBtn = connect()(ShowTicketsBtn)

export default ShowTicketsBtn
