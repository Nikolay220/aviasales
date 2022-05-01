import React from 'react'

import classes from './Logo.module.scss'

function Logo() {
  return (
    <div className={classes['logo-container']}>
      <img className={classes['logo']} src="/images/Logo.png" alt="" />
    </div>
  )
}

export default Logo
