import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, browserHistory} from 'react-router'

import Home from '../../components/home/home.js'

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Home} />
          <IndexRoute component={Home} />
        {/* <Route path='/create-account' component={create-account} />
        <Route path='/sign-up' component={sign-up} /> */}
      </Router>
    )
  }
}

export default App
