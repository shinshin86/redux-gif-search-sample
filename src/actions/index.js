export const REQUEST_DATA = 'REQUEST_DATA'
export const RECEIVE_DATA = 'RECEIVE_DATA'
export const FAILURE_DATA = 'FAILURE_DATA'

export const REGIST_FAVO = 'REGIST_FAVO'
export const SUCCESS_FAVO = 'SUCCESS_FAVO'
export const FAILURE_FAVO = 'FAILURE_FAVO'

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
