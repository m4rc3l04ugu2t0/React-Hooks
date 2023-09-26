import React from 'react'
import ReactDOM from 'react-dom'

import { useReducer } from 'react'

const globalState = {
  title: 'title',
  body: 'body',
  footer: 'footer'
}

const reducer = (state, action) => {
  const { title, body, footer } = state
  
  const reverse = (text) => text.split('').reverse().join('')
  
  switch(action.type) {
    case 'changes': 
      console.log('called "change"')
      return { ...state, title: 'Hello', body: action.payload }
    
    case 'reverse':
      console.log('called "reverse"')
      return { ...state, body: reverse(body), title: reverse(title) }
      
  }
  return { ...state, footer: 'nextlevelcode' }
}

const App = () => {
  const [ state, dispatch] = useReducer(reducer, globalState)
  const { title, body, footer } = state

  return (
    <div>
      <header><h1>{ title }</h1></header>
      <main>
        <p>{ body }</p>
        
        <button
          onClick={() => dispatch({ type: 'changes', payload: new Date().toLocaleString() })}>
          click</button>
        <button onClick={() => dispatch({ type: 'reverse' })}>reverse</button>
        <button onClick={() => dispatch({ type: 'no action' })}>no action</button>
        
      </main>
      <footer>&copy; { footer }</footer>
    </div>
  )
}

ReactDOM.render (
  <App />,
  document.getElementById('react-app')
)