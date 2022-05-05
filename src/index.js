import React from 'react'
import ReactDOMClient from 'react-dom/client'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux'
import '@babel/polyfill'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import { fetchTicketsIfNeeded } from './redux/actions'
import app from './redux/reducers'
import 'antd/dist/antd.min.css'
import './index.scss'
import AppContainer from './containers/AppContainer'

window.onerror = function (message, url, lineNumber) {
  alert('Поймана ошибка, выпавшая в глобальную область!\n' + 'Сообщение: ' + message + '\n(' + url + ':' + lineNumber + ')')
}
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const loggerMiddleware = createLogger()

const store = createStore(app, composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware)))

store.dispatch(fetchTicketsIfNeeded())
const rootContainer = document.getElementById('root')
const root = ReactDOMClient.createRoot(rootContainer)
root.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>
)
