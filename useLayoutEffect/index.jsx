import React from 'react'
import ReactDOM from 'react-dom'

import { useState, useEffect, useRef, useLayoutEffect } from 'react'

export const App = () => {
  const [ counted, setCounted ] = useState(
    [0, 1, 2]
  )
  
  const divRef = useRef()
  
  useLayoutEffect(() => {
    const now = Date.now()
    while (Date.now() < now + 5000)
    divRef.current.scrollTop = divRef.current.scrollHeight
  })
  
  const handleClick = () => {
    setCounted(prevState => [...prevState, +prevState.slice(-1) + 1])
  }
  
  return (
    <div>
      <button onClick={ handleClick }>Count { counted.slice(-1) }</button>
      <div ref={ divRef } style={{ height: '100px', width: '100px', overflow: 'scroll' }}>{
        counted.map(c => {
          return <p key={`c-${c}`}>{ c }</p>
        })
      }</div>
    </div>  
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('react-app')
)