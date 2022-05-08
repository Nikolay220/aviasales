import React from 'react'
import { Checkbox } from 'antd'

import FiltersSpinner from '../FiltersSpinner'

import classes from './StopsFiltersPanel.module.scss'

import './StopsFiltersPanel.scss'

const CheckboxGroup = Checkbox.Group

const StopsFiltersPanel = ({ ticketsInStore, checkAll, plainOptions, checkedList, onChange, onCheckAllChange }) => {
  return (
    <div className={`${classes['filters']}`}>
      {!ticketsInStore && <FiltersSpinner />}
      <div className={classes['header']}>количество пересадок</div>
      <Checkbox disabled={!ticketsInStore} onChange={(e) => onCheckAllChange(e)} checked={checkAll}>
        Все
      </Checkbox>
      <CheckboxGroup disabled={!ticketsInStore} value={checkedList} onChange={(list) => onChange(list)} options={plainOptions} />
    </div>
  )
}

export default StopsFiltersPanel
