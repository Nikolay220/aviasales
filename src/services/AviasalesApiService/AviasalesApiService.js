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
    const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
    const data = await response.json()
    return data.tickets
  }
}
export default AviasalesApiService
