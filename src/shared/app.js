// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import Helmet from 'react-helmet'

import { APP_NAME } from './config'
import Nav from './component/nav'
import HomePage from './page/home'
import HelloPage from './page/hello'
import NotFoundPage from './page/not-found'
import { HOME_PAGE_ROUTE, HELLO_PAGE_ROUTE } from './routes'

const App = () => (
  <div>
    <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
    <Nav />
    <Switch>
      <Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
      <Route path={HELLO_PAGE_ROUTE} render={() => <HelloPage />} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
)

export default App
