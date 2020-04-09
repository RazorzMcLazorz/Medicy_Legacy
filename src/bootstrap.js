import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import reducers from './reducers'

import MainMenu from './pages/mainMenu'
import Login from './pages/login'
import Kingdom from './pages/kingdom'
import Create from './pages/createGame'

const createStoreWithMiddleware = applyMiddleware()(createStore)

import 'bootstrap/dist/css/bootstrap.css'
import './style/main.scss'


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainMenu} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/kingdom" component={Kingdom} />
          <Route exact path="/create" component={Create} />
        </Switch>
      </BrowserRouter>
    </Provider>
    , document.querySelector('.app-wrapper'))
}

document.addEventListener('DOMContentLoaded', main)
