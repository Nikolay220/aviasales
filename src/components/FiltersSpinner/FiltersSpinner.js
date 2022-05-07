import React from 'react'

import CustomSpinner from '../CustomSpinner'

import classes from './FiltersSpinner.module.scss'

export default function FiltersSpinner() {
  return (
    <div className={classes['filters-spinner']}>
      <CustomSpinner />
    </div>
  )
}
