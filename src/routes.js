import React, { Component } from 'react'
import { BrowserRouter, Router, HashRouter, Match, Route,
 Link, hashHistory, IndexRoute, Redirect, IndexLink } from 'react-router-dom'

import Login from './page/login/index.jsx'
import Container from './page/container/index.jsx'

const routes = (
  <HashRouter history={hashHistory} >
    <div>
      <Route path="/" component={Container} />
      <Route path="/login" component={Login} />
    </div>
  </HashRouter>
)

export default routes;