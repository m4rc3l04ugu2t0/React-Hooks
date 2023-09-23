import React from 'react'

import { GlobalContext } from '/useContext/index.jsx'

import { useContext } from 'react'

export const H1 = () => {
  const theContext = useContext(GlobalContext)
  
  console.log(theContext)
  
  return (
    <h1>{ theContext.title }</h1>
  )
}