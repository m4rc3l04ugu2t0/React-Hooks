import React from 'react'
import ReactDOM from 'react-dom'

import { useState } from 'react'

import { Header } from '/useContext/components/Header/index.jsx'
import { Body } from '/useContext/components/Body/index.jsx'

export const globalState = {
  title: 'O título do contexto',
  body: 'body contexto',
  counter: 0
}

export const GlobalContext = React.createContext()

const App = () => {
  const [ state, setState ] = useState(globalState)
  
  return (
    <GlobalContext.Provider value={ globalState }>
      <div>
        <Header />
        <Body />
      </div>
    </GlobalContext.Provider>
  )
}

ReactDOM.render (
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('react-app')
)