import React from 'react'
import { Checkbox } from 'antd'

const CheckboxGroup = Checkbox.Group

// const plainOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']
// const defaultCheckedList = []

import classes from './StopsFiltersPanel.module.scss'
import './StopsFiltersPanel.scss'

const StopsFiltersPanel = ({ checkAll, plainOptions, checkedList, onChange, onCheckAllChange }) => {
  // const [checkedList, setCheckedList] = React.useState(defaultCheckedList)
  // const [checkAll, setCheckAll] = React.useState(false)

  // const onChange = (list) => {
  //   setCheckedList(list)
  //   setCheckAll(list.length === plainOptions.length)
  // }

  // const onCheckAllChange = (e) => {
  //   setCheckedList(e.target.checked ? plainOptions : [])
  //   setCheckAll(e.target.checked)
  // }
  return (
    <div className={`${classes['filters']}`}>
      <div className={classes['header']}>количество пересадок</div>
      <Checkbox onChange={(e) => onCheckAllChange(e)} checked={checkAll}>
        Все
      </Checkbox>
      <CheckboxGroup value={checkedList} onChange={(list) => onChange(list)} options={plainOptions} />
    </div>
  )
}

export default StopsFiltersPanel
