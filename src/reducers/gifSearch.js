import { REQUEST_DATA, RECEIVE_DATA, FAILURE_DATA } from '../actions'

const initial = {
  data: {
    isFetching: false,
    data: [],
    lastUpdated: 0,
  },
};


export default function gifSearch(
  state=initial.data,
  action
) {
  switch (action.type) {
    case REQUEST_DATA:
      return {...state, isFetching: true }
    case RECEIVE_DATA:
      return {
        ...state,
        isFetching: false,
        data: action.data,
        lastUpdated: action.requestAt,
      }
    case FAILURE_DATA:
      state
    default:
      return state
  }
}
