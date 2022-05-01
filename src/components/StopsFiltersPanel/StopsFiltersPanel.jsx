import React from 'react'
import { Checkbox } from 'antd'

const CheckboxGroup = Checkbox.Group

const plainOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']
const defaultCheckedList = []

import classes from './StopsFiltersPanel.module.scss'
import './StopsFiltersPanel.scss'

const StopsFiltersPanel = () => {
  const [checkedList, setCheckedList] = React.useState(defaultCheckedList)
  const [indeterminate, setIndeterminate] = React.useState(true)
  const [checkAll, setCheckAll] = React.useState(false)

  const onChange = (list) => {
    setCheckedList(list)
    setIndeterminate(!!list.length && list.length < plainOptions.length)
    setCheckAll(list.length === plainOptions.length)
  }

  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : [])
    setIndeterminate(false)
    setCheckAll(e.target.checked)
  }
  return (
    <div className={`${classes['filters']}`}>
      <div className={classes['header']}>количество пересадок</div>
      <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        Все
      </Checkbox>
      <CheckboxGroup
        value={checkedList}
        onChange={onChange}
        options={plainOptions}
      />
    </div>
  )
}

export default StopsFiltersPanel
