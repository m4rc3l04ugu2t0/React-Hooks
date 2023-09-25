import React from 'react'
import { createContext, useState } from 'react'

export const GlobalContext = createContext()

import { globalState } from '/useContext/globalState/index.jsx'

export const AppContext = ({ children }) => {
  const [ stateContext, setStateContext ] = useState(globalState)
  
  return (
    <GlobalContext.Provider value={{ stateContext, setStateContext }}>
      { children }
    </GlobalContext.Provider>
  )
}