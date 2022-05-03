import React from 'react'
import ReactDOMClient from 'react-dom/client'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux'

import app from './redux/reducers'
import 'antd/dist/antd.min.css'
import './index.scss'
import App from './components/App'
const store = createStore(app)
const rootContainer = document.getElementById('root')
const root = ReactDOMClient.createRoot(rootContainer)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
