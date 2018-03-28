import { take, put, call, fork, select } from 'redux-saga/effects'
import { REQUEST_DATA,  receiveData, failureData, REGIST_FAVO, successFavo, failureFavo } from '../actions'
import fetch from 'isomorphic-fetch'
import { API_KEY } from '../env'
import { registFavoriteItem } from '../utils/item'

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

export function* handleFavoriteItem() {
  while(true) {
    const action = yield take(REGIST_FAVO)
    const data   = yield call(getFetchedData) // get current fetch data...
    const item   = yield call(getFavoriteItem, action.itemId, data)
    const res    = yield call(registFavoriteItem, item)
    if(res) {
      yield put (successFavo(item))
    } else {
      yield put (failureFavo())
    }
  }
}

export function getFavoriteItem (id, gifs) {
  const selectedItem = gifs.filter((gif) => {
    return gif.id === id
  })
  return selectedItem[0]
}

export function* getFetchedData() {
  const { gifSearch }  = yield select()
  console.log(gifSearch)
  return gifSearch.data
}
  

export default function* root() {
  yield fork(handleRequestData)
  yield fork(handleFavoriteItem)
}
