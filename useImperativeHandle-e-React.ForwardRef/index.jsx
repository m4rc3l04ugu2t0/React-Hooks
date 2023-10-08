import React from 'react'
import ReactDOM from 'react-dom'

import { useState, useEffect, useRef, useLayoutEffect, forwardRef, useImperativeHandle  } from 'react'

export const App = () => {
  const [ counted, setCounted ] = useState(
    [0, 1, 2]
  )
  
  const divRef = useRef()
  
  useLayoutEffect(() => {
    divRef.current.divRef.scrollTop = divRef.current.divRef.scrollHeight
  })
  
  const handleClick = () => {
    setCounted(prevState => [...prevState, +prevState.slice(-1) + 1])
    divRef.current.handleClick()
  }
  
  return (
    <div>
      <button onClick={ handleClick }>Count { counted.slice(-1) }</button>
      <DisplayCounted counted={ counted } ref={ divRef } />
    </div>  
  )
}

const DisplayCounted = forwardRef(function DisplayCounted({ counted }, ref) {
  const [rand, setRand] = useState('0,24')
  const divRef = useRef()
  
  const handleClick = () => {
    setRand(Math.random().toFixed(2))
  }
  
  useImperativeHandle(ref, () => ({
    handleClick, divRef: divRef.current
  }))
  
  return (
    <div>
      <div ref={ divRef } style={{ height: '100px', width: '100px', overflow: 'scroll' }}>{
        counted.map(c => {
          return <p onClick={ handleClick } key={`c-${c}`}>{ c } +++ { rand }</p>
        })
      }</div>
    </div>  
  )
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('react-app')
)