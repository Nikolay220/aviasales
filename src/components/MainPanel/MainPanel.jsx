import React, { Component } from 'react'
import { Button } from 'antd'

import Filters from '../Filters'
import TicketsList from '../TicketsList'

// MainPanel делает загрузку
import classes from './MainPanel.module.scss'
export default class MainPanel extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={classes['main-panel']}>
        <Filters />
        <TicketsList />
        <Button block="true" type="primary" className={classes['btn']}>
          показать ещё 5 билетов!
        </Button>
      </div>
    )
  }
}
