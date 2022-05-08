import NetworkError from './NetworkError'
export default class NoTicketsLoadedError extends NetworkError {
  constructor(message) {
    super(message)
    this.name = 'NoTicketsLoadedError'
    this.checksRecommendations = 'No tickets loaded, reload please. If it will not help, write message with error screenshot to our-company@gmail.com please. '
  }
}
