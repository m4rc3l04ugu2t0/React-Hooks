import React from 'react'
import ReactDom from 'react-dom'

import { useState} from 'react'

export const App = () => {
  const [ posts, setPosts ] = useState([])
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(response => setPosts(response))
  }, [])
  
  return (
    <div>
      { posts.map(post => {
        return (
          <div key={ post.id }>
            <h1>{ post.title }</h1>
            <p>{ post.body }</p>
          </div>
        )
      })
      }
    </div>
  )
}

ReactDom.render (
  <App />,
  document.getElementById('react-app')
)