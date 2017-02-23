import { render } from 'react-dom'
import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, browserHistory} from 'react-router'
// import {Provider} from 'react-redux';

import Home from './components/home/home.js'
// import store from '../../../app/store.js'

import style from './styles.scss'

const router = (
      // <Provider store={store}>
        <Router history={browserHistory}>
          <Route path='/' component={Home} />
            <IndexRoute component={Home} />
          {/* <Route path='/create-account' component={create-account} />
          <Route path='/sign-up' component={sign-up} /> */}
        </Router>
      // </Provider>
)



render(router, document.querySelector('.application'));
