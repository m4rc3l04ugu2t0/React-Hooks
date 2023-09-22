import React from 'react'

export const Posts = ({ post }) => {
  console.log('children rendered')
  
  return (
    <div>
      <h1>{ post.title }</h1>
      <p>{ post.body }</p>
    </div>
  )
}