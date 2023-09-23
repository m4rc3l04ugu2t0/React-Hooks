import React from 'react'

import { GlobalContext } from '/useContext/index.jsx'

import { useContext} from 'react'

export const P = () => {
  const theContext = useContext(GlobalContext)
  
  return (
    <p>{ theContext.body }</p>
  )
}