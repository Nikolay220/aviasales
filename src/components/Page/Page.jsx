import React, { Component } from 'react'

import StopsFiltersPanel from '../StopsFiltersPanel'
import MainPanel from '../MainPanel'

import classes from './Page.module.scss'
export default class Page extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={classes['page']}>
        <StopsFiltersPanel />
        <MainPanel />
      </div>
    )
  }
}
