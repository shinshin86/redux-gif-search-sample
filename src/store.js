import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
import rootSaga from './sagas'

const __PRODUCTION__ = process.env.NODE_ENV === 'production'

export default function configureStore() {
  const middlewares = []
  const sagaMiddleware = createSagaMiddleware()
  middlewares.push(sagaMiddleware)

  if (!__PRODUCTION__) {
    middlewares.push(createLogger())
  }

  const store = createStore(rootReducer, applyMiddleware(...middlewares))
  sagaMiddleware.run(rootSaga)
  return store
}
