import {
  REQUEST_FAVORITE_ITEM,
  RECEIVE_FAVORITE_ITEM,
  FAILURE_FAVORITE_ITEM,
  UPDATE_FAVORITE_COUNT,
} from '../actions'

const initial = {
  data: {
    data: [],
    isFetching: false,
    lastUpdated: 0,
  },
};


export default function gifSearch(
  state=initial.data,
  action
) {
  switch (action.type) {
    // request gif item
    case REQUEST_FAVORITE_ITEM:
      return {...state, isFetching: true }
    case RECEIVE_FAVORITE_ITEM:
      console.log('*** receive favorite item ***')
      return {
        ...state,
        isFetching: false,
        data: action.data,
        lastUpdated: action.requestAt,
      }
    case FAILURE_FAVORITE_ITEM:
      console.log('*** failure favorite item ***')
      return {
        ...state,
        isFetching: false,
      }
    case UPDATE_FAVORITE_COUNT:
      return {
        ...state,
        favoriteCount: state.data.length,
      }
    default:
      return state
  }
}
