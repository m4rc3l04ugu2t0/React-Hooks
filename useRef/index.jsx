import React from 'react'
import ReactDom from 'react-dom'

import { useState, useEffect, useMemo, useRef } from 'react'

import { Posts } from '/useRef/Posts/index.jsx'

const App = () => {
  const [ posts, setPosts ] = useState([])
  const [ searchValue, setSearchValue ] = useState('')
  const inputSearch = useRef(null)
  const counter = useRef(0)
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(response => setPosts(response))
  }, [])
  
  useEffect(() => {
    inputSearch.current.focus()
  }, [searchValue])
  
  useEffect(() => {
    counter.current++
  })
  
  const handleClickP = (value) => {
    setSearchValue(value)
  }
  
  console.log('parent component rendered')
  
  return (
    <div>
      <input type="search"
        ref={ inputSearch }
        value={ searchValue }
        onChange={ e => setSearchValue(e.target.value)}
      />
      
      { useMemo(() => {
        return (
          posts.length === 0 ? 'loading posts...' :
          posts.map(post => {
            return (
              <Posts key={ post.id }
              post={ post }
              handleClickP={ handleClickP }
              />
            )
          })
        )
      }, [posts])}
      <p>Renderizou: { counter.current }x</p>
    </div>
  )
}

ReactDom.render(
  <App />,
  document.getElementById('react-app')
)