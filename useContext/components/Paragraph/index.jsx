import React from 'react'

import { useContext } from 'react'

import { GlobalContext } from '/useContext/AppContext/index.jsx'

export const Paragraph = () => {
  const theContext = useContext(GlobalContext)
  const { stateContext: { body, counter }, setStateContext } = theContext
  
  return (
    <p onClick={() => setStateContext((s) => ({ ...s, counter: s.counter + 1 }))}>
      { body } Clique aqui!
    </p>
  )
}