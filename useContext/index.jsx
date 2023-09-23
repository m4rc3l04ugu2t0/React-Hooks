import React from 'react'
import ReactDOM from 'react-dom'
//import { createContext } from 'react'

import { Header } from '/useContext/components/Header/index.jsx'

const globalState = {
  title: 'O título do contexto',
  counter: 0
}

const GlobalContext = React.createContext()

const App = () => {
  return (
    <GlobalContext.Provider value={ globalState }>
      <div>
        <Header />
      </div>
    </GlobalContext.Provider>
  )
}

ReactDOM.render (
  <App />,
  document.getElementById('react-app')
)