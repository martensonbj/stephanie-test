import { render } from 'react-dom'
import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, browserHistory} from 'react-router'
// import {Provider} from 'react-redux';

import Home from './components/home/home.js'
import SeniorForm from './components/senior-form/senior-form.js'
// import store from '../../../app/store.js'

import style from './styles.scss'

const router = (
      // <Provider store={store}>
        <Router history={browserHistory}>
          <Route path='/' component={Home} />
            {/* <IndexRoute component={Home} /> */}
            {/* BM - Was getting a weird error message that was super explicit - like "it does not make sense for the index route to be in your route file." haha. I felt scolded! I removed it.  */}
          <Route path='/sign-up' component={SeniorForm} />
        </Router>
      // </Provider>
)



render(router, document.querySelector('.application'));
