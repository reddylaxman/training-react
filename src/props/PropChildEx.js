import React from 'react'

export const PropChildEx = (props) => {
  return (
    <div>PropChildEx
    <h1>{props.num}</h1>
    {
        <h1>{props.children}</h1>
        
    }</div>
  )
}
