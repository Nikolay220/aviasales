import fetch from 'cross-fetch'
class AviasalesApiService {
  constructor() {
    this._searchId = null
    // this.getSearchId().then((searchId) => {
    //   this._searchId = searchId
    //   this.getTickets(searchId).then((data) => {
    //     console.log(data)
    //   })
    // })
  }
  async getSearchId() {
    if (!this._searchId) {
      const response = await fetch('https://aviasales-test-api.kata.academy/search')
      const data = await response.json()
      this._searchId = data.searchId
      return data.searchId
    }
    return this._searchId
  }
  async getTickets(searchId) {
    try {
      let data = null
      const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
      if (response.ok) {
        data = await response.json()
        return data
      } else {
        return this.getTickets(searchId)
      }
    } catch (error) {
      console.log(error)
      return this.getTickets(searchId)
    }
  }
  async getAllTickets(searchId, ticketsAreOver) {
    let allTickets = []
    let data = { stop: ticketsAreOver, tickets: [] }
    // const searchId = await this.getSearchId()
    while (!data.stop) {
      allTickets = allTickets.concat(data.tickets)
      data = await this.getTickets(searchId)
    }
    return allTickets
  }
}
export default AviasalesApiService
