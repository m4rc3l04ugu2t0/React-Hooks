import React from 'react'
import { useState} from 'react'

export const Main = () => {
  const [ animationRotate, settAnimationRotate ] = useState(false)
  const [ counter, setCounter ] = useState(0)
  
  const handleClickAnimationRotate = () => {
    settAnimationRotate(!animationRotate)
  }
  
  const handleClickIncreaseCounter = () => {
    setCounter(counter + 1)
  }
  
  return (
    <div>
      <div className={ `cicle ${ animationRotate ? 'rotate-reverce' : 'rotate' }`}></div>
      <p>Counter: { counter }</p>
      <p>
        <button 
          type="button"
          onClick={ handleClickAnimationRotate }>
          Rotate
        </button>
        <button onClick={ handleClickIncreaseCounter }>
          Counter
        </button>
      </p>
    </div>
  )
}