import React from 'react'

import { useContext } from 'react'

export const H1 = () => {
  const theContext = useContext(globalContext)
  
  return (
    <h1>{ theContext.title }</h1>
  )
}