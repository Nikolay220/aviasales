import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'

import { fetchTicketsIfNeeded } from '../../redux/actions'

import classes from './ShowTicketsBtn.module.scss'

let ShowTicketsBtn = ({ dispatch }) => {
  return (
    <Button
      onClick={() => {
        dispatch(fetchTicketsIfNeeded()).then((data) => console.log(data))
      }}
      block="true"
      type="primary"
      className={classes['btn']}
    >
      показать ещё 5 билетов!
    </Button>
  )
}

ShowTicketsBtn = connect()(ShowTicketsBtn)

export default ShowTicketsBtn
