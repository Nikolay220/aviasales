import fetch from 'cross-fetch'

import GetSearchIdError from '../../Errors/GetSearchIdError'
import GetTicketsError from '../../Errors/GetTicketsError'
class AviasalesApiService {
  constructor() {
    this._searchId = null
  }
  async getSearchId() {
    if (!this._searchId) {
      try {
        const response = await fetch('https://aviasales-test-api.kata.academy/search')
        let data = null
        if (response.ok) {
          data = await response.json()
          this._searchId = data.searchId
          return data.searchId
        } else {
          throw new GetSearchIdError(response.ok)
        }
      } catch (error) {
        throw new GetSearchIdError(error.message)
      }
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
        // return this.getTickets(searchId)
        throw new GetTicketsError(response.ok)
      }
    } catch (error) {
      // return this.getTickets(searchId)
      throw new GetTicketsError(error.message)
    }
  }
  async getAllTickets(searchId, ticketsAreOver) {
    let allTickets = []
    let data = { stop: ticketsAreOver, tickets: [] }
    while (!data.stop) {
      allTickets = allTickets.concat(data.tickets)
      data = await this.getTickets(searchId)
    }
    return allTickets
  }
}
export default AviasalesApiService
