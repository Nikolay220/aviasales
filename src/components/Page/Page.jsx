import React, { Component } from 'react'

import StopsFiltersContainer from '../../containers/StopsFiltersContainer'
import MainPanel from '../MainPanel'

import classes from './Page.module.scss'
export default class Page extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={classes['page']}>
        <StopsFiltersContainer />
        <MainPanel />
      </div>
    )
  }
}
