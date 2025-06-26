import React from 'react'
import "./Button.css"

const Button = (props) => {
  return (
    <div>
        
        <button id="but1">{props.txt}</button>

    </div>
  )
}

export default Button