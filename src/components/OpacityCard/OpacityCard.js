import React from 'react'
import './OpacityCard.css'

export const OpacityCard = (props) => {
  return (
    <div className="Banner-right-box1">
        <h1 className="heading">
            {props.heading}
        </h1>
        <p>
            {props.description}
        </p>
        </div>
  )
}
