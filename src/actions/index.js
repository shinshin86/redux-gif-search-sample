export const REQUEST_DATA = 'REQUEST_DATA'
export const RECEIVE_DATA = 'RECEIVE_DATA'
export const FAILURE_DATA = 'FAILURE_DATA'

export const REGIST_FAVO = 'REGIST_FAVO'
export const SUCCESS_FAVO = 'SUCCESS_FAVO'
export const FAILURE_FAVO = 'FAILURE_FAVO'

export const REQUEST_FAVORITE_ITEM = 'REQUEST_FAVORITE_ITEM'
export const RECEIVE_FAVORITE_ITEM = 'RECEIVE_FAVORITE_ITEM'
export const FAILURE_FAVORITE_ITEM = 'FAILURE_FAVORITE_ITEM'
export const UPDATE_FAVORITE_COUNT = 'UPDATE_FAVORITE_COUNT'

export function requestData(text) {
  return {
    type: REQUEST_DATA,
    text
  }
}

export function receiveData(data) {
  return {
    type: RECEIVE_DATA,
    data,
    requestAt: Date.now(),
  }
}

export function failureData() {
  return {
    type: FAILURE_DATE
  }
}

export function registFavo(itemId, data) {
  return {
    type: REGIST_FAVO,
    itemId,
    favoriteAt: Date.now(),
  }
}

export function successFavo(item) {
  return {
    type: SUCCESS_FAVO,
    item
  }
}

export function failureFavo() {
  return {
    type: FAILURE_FAVO
  }
}

// fetch favorite item
export function requestFavoriteItem() {
  return {
    type: REQUEST_FAVORITE_ITEM
  }
}

export function receiveFavoriteItem(data) {
  return {
    type: RECEIVE_FAVORITE_ITEM,
    data,
    requestAt: Date.now(),
  }
}

export function failureFavoriteItem() {
  return {
    type: FAILURE_FAVORITE_ITEM,
  }
}

export function updateFavoriteCount() {
  return {
    type: UPDATE_FAVORITE_COUNT,
  }
}
