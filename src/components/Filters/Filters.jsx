import React from 'react'
import { Radio } from 'antd'

import './Filters.scss'
import classes from './Filters.module.scss'
const Filters = () => {
  return (
    <Radio.Group className={classes['filters']} defaultValue="a" buttonStyle="solid">
      <Radio.Button value="a">самый дешёвый</Radio.Button>
      <Radio.Button value="b">самый быстрый</Radio.Button>
      <Radio.Button value="c">оптимальный</Radio.Button>
    </Radio.Group>
  )
}
export default Filters
