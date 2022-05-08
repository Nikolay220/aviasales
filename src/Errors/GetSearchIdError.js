import NetworkError from './NetworkError'
export default class GetSearchIdError extends NetworkError {
  constructor(message) {
    super(message)
    this.name = 'GetSearchIdError'
  }
}
