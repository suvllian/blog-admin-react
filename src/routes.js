import React, { Component } from 'react'
import { BrowserRouter, Router, HashRouter, Match, Route,
 Link, hashHistory, IndexRoute, Redirect, IndexLink } from 'react-router-dom'

import Login from './page/login/index.jsx'

class App extends Component {
	render() {
		return (
			<div>
	      { this.props.children }
			</div>
			);
	}
}

const routes = (
  <HashRouter history={hashHistory} >
    <App>
      <Route path="/" component={Login} />
    </App>
  </HashRouter>
)

export default routes;