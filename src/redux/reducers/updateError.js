import { ERROR_OCCURED } from '../actions'
export default function updateError(state = null, action) {
  switch (action.type) {
    case ERROR_OCCURED:
      return action.error
    default:
      return state
  }
}
