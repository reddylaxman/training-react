import React, { useContext } from 'react'
import { ContextC3 } from './ContextC3'

export const ContextC2 = () => {
    const data=useContext();
  return (
    <div>ContextC2
    
    <ContextC3/></div>
  )
}
