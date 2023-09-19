import React from 'react';
import ReactDOM from 'react-dom';

import { useState, useEffect } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)
  
  const event = () => {
    console.log('h1 clicked')
  }
  
  const handleClickCounter = () => {
    setCounter(counter + 1)
  }
  
  useEffect(() => {
    console.log('updates whenever the state changes')
  })
  
  useEffect(() => {
    console.log('runs once when the page is mounted')
    
    document.querySelector('h1').addEventListener('click', event)
    
    return () => {
      // clean up the trash left each time the page is mounted
      document.querySelector('h1').removeEventListener('click', event)
    }
  }, [])
  
  useEffect(() => {
    console.log(`runs every time the dependency changes. dependency changed: "${counter}"`)
  }, [counter])
  
  return (
    <div>
      <h1>Counter: { counter }</h1>
      <button type="button" onClick={ handleClickCounter } >+</button>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('react-app')
);
