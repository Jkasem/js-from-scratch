import compression from 'compression'
import express from 'express'

import { APP_NAME, STATIC_PATH } from '../shared/config'
import renderApp from './render-app'

import { helloEndpointRoute } from '../shared/routes'

const app = express()

app.use(compression())
app.use(STATIC_PATH, express.static('dist'))
app.use(STATIC_PATH, express.static('public'))

app.get('/', (req, res) => {
  res.send(renderApp(APP_NAME))
})

app.get(helloEndpointRoute(), (req, res) => {
  res.json({ serverMessage: `Hello from the server! (received ${req.params.num})` })
})

module.exports = app
