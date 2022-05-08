import NetworkError from './NetworkError'
export default class GetTicketsError extends NetworkError {
  constructor(message) {
    super(message)
    this.name = 'GetTicketsError'
    this.checksRecommendations = 'Not all tickets loaded, reload please. If it will not help, write message with error screenshot to our-company@gmail.com please. '
  }
}
