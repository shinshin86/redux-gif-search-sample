import {
  REQUEST_DATA, RECEIVE_DATA, FAILURE_DATA,
  REGIST_FAVO,  SUCCESS_FAVO, FAILURE_FAVO
} from '../actions'

const initial = {
  data: {
    isFetching: false,
    data: [],
    lastUpdated: 0,
    itemId: '',
    favoriteAt: 0,
  },
};


export default function gifSearch(
  state=initial.data,
  action
) {
  switch (action.type) {
    // request gif item
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
      return state

    // favorite item
    case REGIST_FAVO:
      return {
        ...state,
        itemId: action.itemId,
        favoriteAt: action.favoriteAt,
      }
    case SUCCESS_FAVO:
      return state
    case FAILURE_FAVO:
      return state

    default:
      return state
  }
}
