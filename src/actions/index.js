export const REQUEST_DATA = 'REQUEST_DATA'
export const RECEIVE_DATA = 'RECEIVE_DATA'
export const FAILURE_DATA = 'FAILURE_DATA'

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

