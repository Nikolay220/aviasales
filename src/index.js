import React from 'react'
import ReactDOMClient from 'react-dom/client'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux'
import '@babel/polyfill'
import thunkMiddleware from 'redux-thunk'
import { Offline, Online } from 'react-detect-offline'
import { Alert } from 'antd'

import { fetchTicketsIfNeeded } from './redux/actions'
import app from './redux/reducers'
import 'antd/dist/antd.min.css'
import './index.scss'
import App from './components/App'

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const store = createStore(app, composeEnhancers(applyMiddleware(thunkMiddleware)))

store.dispatch(fetchTicketsIfNeeded())
const rootContainer = document.getElementById('root')
const root = ReactDOMClient.createRoot(rootContainer)
root.render(
  <React.Fragment>
    <Offline>
      <Alert message="Error" description={'Recommendation: you are offline, check your internet connection.'} type="error" showIcon />
    </Offline>
    <Online>
      <Provider store={store}>
        <App />
      </Provider>
    </Online>
  </React.Fragment>
)
