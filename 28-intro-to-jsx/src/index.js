import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  // what to render
  <App cool='nice' />, // App({ cool: 'nice' })
  // where to render it
  document.getElementById('root')
)
