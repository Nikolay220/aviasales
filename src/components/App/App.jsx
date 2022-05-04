import React, { Component } from 'react'

import Logo from '../Logo'
import Page from '../Page'
import CustomSpinner from '../CustomSpinner'

import classes from './App.module.scss'

class App extends Component {
  constructor(props) {
    super(props)    
  }
  
  render() {
    if(this.props.ticketsAreFetcing) return <CustomSpinner />
    return (
      <div className={classes['app']}>
        <Logo />
        <Page />
      </div>
    )
  }
}
export default App
