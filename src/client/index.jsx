// @flow

import 'babel-polyfill'

import React from 'react'
import { hydrate } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'
import setUpSocket from './socket'

import app from '../shared/app'
import helloReducer from '../shared/reducer/hello'
import { APP_CONTAINER_SELECTOR } from '../shared/config'
import { isProd } from '../shared/util'

/* eslint-disable no-underscore-dangle */
const composeEnhancers = (isProd ? null : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const preloadedState = window.__PRELOADED_STATE__
/* eslint-enable no-underscore-dangle */
delete window.__PRELOADED_STATE__

const store = createStore(
  combineReducers({ hello: helloReducer }),
  { hello: preloadedState.hello },
  composeEnhancers(applyMiddleware(thunkMiddleware)),
)

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR)
if (!(rootEl instanceof Element)) {
  throw new Error('invalid type')
}

const wrapApp = (AppComponent, reduxStore) => (
  <Provider store={reduxStore}>
    <BrowserRouter>
      <AppContainer>
        <AppComponent />
      </AppContainer>
    </BrowserRouter>
  </Provider>
)

hydrate(wrapApp(app, store), rootEl)

// flow-disable-next-line
if (module.hot) {
  module.hot.accept('../shared/app', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('../shared/app').default
    hydrate(wrapApp(NextApp), rootEl)
  })
}

setUpSocket(store)
