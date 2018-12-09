import '@babel/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import Favorite from './components/Favorite'
import configureStore from './store'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const store = configureStore()

render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/favorite" component={Favorite} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
