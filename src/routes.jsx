import React from 'react'
import { HashRouter, Route, hashHistory } from 'react-router-dom'
import Container from './container/app.jsx'
import Login from './page/login/index.jsx'

const routes = (
  <HashRouter history={hashHistory} >
    <div> 
      <Route path="/index" component={Container} />
      <Route path="/login" component={Login} />
    </div>
  </HashRouter>
);

export default routes;