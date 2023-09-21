import React from 'react'
import ReactDom from 'react-dom'

import { useState, useEffect, useMemo } from 'react'

import { Posts } from '/useMemo/Posts/index.jsx'

const App = () => {
  const [ posts, setPosts ] = useState([])
  const [ searchValue, setSearchValue ] = useState('')
  
  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(response => setPosts(response))
    }, 2000)
  }, [])
  
  console.log('parent component rendered')
  
  return (
    <div>
      <input type="search"
        value={ searchValue }
        onChange={ e => setSearchValue(e.target.value)}
      />
      
      { useMemo(() => {
        return (
          posts.length === 0 ? 'loading posts...' :
          posts.map(post => {
            return <Posts key={post.id} post={ post } />
          })
        )
      }, [posts])}
    </div>
  )
}

ReactDom.render(
  <App />,
  document.getElementById('react-app')
)