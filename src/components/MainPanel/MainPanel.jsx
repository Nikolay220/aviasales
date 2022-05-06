import React, { Component } from 'react'

import SortFiltersContainer from '../../containers/SortFiltersContainer'
import TicketsListContainer from '../../containers/TicketsListContainer'
import ShowTicketsBtnContainer from '../../containers/ShowTicketsBtnContainer'

import classes from './MainPanel.module.scss'
export default class MainPanel extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={classes['main-panel']}>
        <SortFiltersContainer />
        <TicketsListContainer />
        <ShowTicketsBtnContainer />
      </div>
    )
  }
}
