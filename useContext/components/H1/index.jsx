import React from 'react'

import { useContext } from 'react'

import { GlobalContext } from '/useContext/AppContext/index.jsx'

export const H1 = () => {
  const theContext = useContext(GlobalContext)
  const { stateContext: { title, counter } } = theContext
  
  return (
    <h1>{ title } { counter }</h1>
  )
}