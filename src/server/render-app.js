// @flow

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router'
import Helmet from 'react-helmet'
import { ServerStyleSheet } from 'styled-components'

import initStore from './init-store'
import App from '../shared/app'
import { APP_CONTAINER_CLASS, STATIC_PATH, WDS_PORT } from '../shared/config'
import { isProd } from '../shared/util'

const renderApp = (location: string, plainPartialState: ?Object, routerContext: ?Object = {}) => {
  const store = initStore(plainPartialState)

  const sheet = new ServerStyleSheet()
  const appHtml = ReactDOMServer.renderToString(
    sheet.collectStyles(
      <Provider store={store}>
        <StaticRouter location={location} context={routerContext}>
          <App />
        </StaticRouter>
      </Provider>,
    ),
  )
  const styleTags = sheet.getStyleTags() // or sheet.getStyleElement();
  const head = Helmet.rewind()

  return `<!doctype html>
    <html>
        <head>
            ${head.title}
            ${head.meta}
            <link rel="stylesheet" href="${STATIC_PATH}/css/style.css">
            ${styleTags}
        </head>
        <body>
        <div class="${APP_CONTAINER_CLASS}">${appHtml}</div>
        <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState())}
        </script>
        <script src="${
          isProd ? STATIC_PATH : `http://localhost:${WDS_PORT}/dist`
        }/js/bundle.js"></script>
        </body>
    </html>`
}

export default renderApp
