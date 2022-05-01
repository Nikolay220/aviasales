import React, { Component } from 'react'

import Logo from '../Logo'
import Page from '../Page'

import classes from './App.module.scss'
// import AviasalesApiService from '../../services/AviasalesApiService'
class App extends Component {
  constructor(props) {
    super(props)
    // this.apiService = new AviasalesApiService()
  }
  componentDidMount() {
    // this.apiService.getSearchId().then((searchId) => {
    //   this.apiService.getTickets(searchId).then((data) => {
    //     console.log(data)
    //   })
    // })
  }
  render() {
    return (
      <div className={classes['app']}>
        <Logo />
        <Page />
      </div>
    )
  }
}
export default App
