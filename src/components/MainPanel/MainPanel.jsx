import React, { Component } from 'react'

import SortFiltersContainer from '../../containers/SortFiltersContainer'
import ShowTicketsBtn from '../../containers/ShowTicketsBtn'
import TicketsListContainer from '../../containers/TicketsListContainer'

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
        <ShowTicketsBtn />
      </div>
    )
  }
}
