import { take, put, call, fork, select } from 'redux-saga/effects'
import { REQUEST_DATA,  receiveData, failureData } from '../actions'
import fetch from 'isomorphic-fetch'
import { API_KEY } from '../env'

export function* handleRequestData() {
  while (true) {
    const action = yield take(REQUEST_DATA)
    const data = yield call(fetchGifsApi, action.text)

    if(data) {
      yield put(receiveData(data))
    } else {
      yield put(failureData())
    }
  }
}

export function fetchGifsApi(query) {
  const params = encodeURIComponent(query).replace(/%20/g, '+')
  return fetch(`http://api.giphy.com/v1/gifs/search?q=${params}&api_key=${API_KEY}`)
    .then(res => res.json())
    .then(json => json.data)
}

export default function* root() {
  yield fork(handleRequestData)
}
