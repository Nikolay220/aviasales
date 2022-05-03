import React from 'react'
import { Radio } from 'antd'

import './SortFilters.scss'
import { sortFilters } from '../../redux/actions'

import classes from './SortFilters.module.scss'
const SortFilters = ({ curFilter, onClick }) => {
  return (
    <Radio.Group className={classes['sort-filters']} value={curFilter} defaultValue={curFilter} buttonStyle="solid">
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
  )
}
export default SortFilters
