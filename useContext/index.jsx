import React from 'react'
import ReactDOM from 'react-dom'

import { AppContext } from '/useContext/AppContext/index.jsx'
import { Header } from '/useContext/components/Header/index.jsx'
import { Body } from '/useContext/components/Body/index.jsx'

const App = () => {
  
  return (
    <AppContext>
      <Header />
      <Body />
    </AppContext>
  )
}

ReactDOM.render (
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('react-app')
)