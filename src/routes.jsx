import React from 'react';
import { HashRouter, Route, hashHistory } from 'react-router-dom';
import Login from './page/login/index.jsx';
import Container from './page/container/index.jsx';

const routes = (
  <HashRouter history={hashHistory} >
    <div>
      <Route path="/index" component={Container} />
      <Route path="/login" component={Login} />
    </div>
  </HashRouter>
);

export default routes;