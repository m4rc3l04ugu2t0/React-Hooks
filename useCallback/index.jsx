import React from 'react'
import ReactDom from 'react-dom'

import { useState, useCallback, memo } from 'react'
import P from 'prop-type'

const Button = memo(({ incrementCounter }) => {
  console.log('child component rendered')
  return (
    <button onClick={() => incrementCounter(10)}>+</button>
  )
})

Button.propType = {
  incrementButton: P.func
}

const App = () => {
  const [ counter, setCounter ] = useState(0)
  
  const incrementCounter = useCallback((num) => {
    setCounter(counter => counter + num)
  }, [])
  
  console.log('parent component rendered')
  
  return (
    <div>
      <h1>Counter: { counter }</h1>
      <Button incrementCounter={ incrementCounter } />
    </div>
  )
}

ReactDom.render(
  <App />, 
  document.getElementById('react-app')
)