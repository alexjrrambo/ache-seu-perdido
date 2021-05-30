import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Home from '../pages/Home'
import SearchResults from '../pages/SearchResults'

export const history = createBrowserHistory()

export const PublicRoutes = () => (
  <Switch>
    <Route exact path="/busca-de-objetos" component={SearchResults} />
    <Route path="/" component={Home} />
  </Switch>
)
