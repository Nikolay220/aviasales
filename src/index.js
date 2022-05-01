import React from 'react'
import ReactDOMClient from 'react-dom/client'

import 'antd/dist/antd.min.css'
import './index.scss'
import App from './components/App'

const rootContainer = document.getElementById('root')
const root = ReactDOMClient.createRoot(rootContainer)
root.render(<App />)
