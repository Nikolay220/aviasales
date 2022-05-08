import React, { Fragment } from 'react'
import { Radio } from 'antd'

import './SortFilters.scss'
import { sortFilters } from '../../redux/actions'
import FiltersSpinner from '../FiltersSpinner'

import classes from './SortFilters.module.scss'
const SortFilters = ({ ticketsInStore, curFilter, onClick }) => {
  return (
    <Fragment>
      <Radio.Group disabled={!ticketsInStore} className={classes['sort-filters']} value={curFilter} defaultValue={curFilter} buttonStyle="solid">
        {!ticketsInStore && <FiltersSpinner />}
        <Radio.Button onClick={() => onClick(sortFilters.cheapest)} value={sortFilters.cheapest}>
          самый дешёвый
        </Radio.Button>
        <Radio.Button onClick={() => onClick(sortFilters.fastest)} value={sortFilters.fastest}>
          самый быстрый
        </Radio.Button>
        <Radio.Button onClick={() => onClick(sortFilters.optimal)} value={sortFilters.optimal}>
          оптимальный
        </Radio.Button>
      </Radio.Group>
    </Fragment>
  )
}
export default SortFilters
