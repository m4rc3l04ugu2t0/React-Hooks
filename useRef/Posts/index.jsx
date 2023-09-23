import React from 'react'

export const Posts = ({ post, handleClickP }) => {
  return (
    <div key={ post.id }>
      <h1 onClick={ () => handleClickP(post.title) }>{ post.title }</h1>
      <p>{ post.body }</p>
    </div>
  )
}