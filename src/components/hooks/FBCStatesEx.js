import React, { useState } from 'react'

 const FBCStatesEx = () => {
  const data=React.useState(0);
  console.log(data);
  const [count,setCount]=useState(0);
  const incrementCount=()=>{
    setCount(count+1);
  }
  return (
    <div>
    <h1> {count}</h1>
    <button onClick={incrementCount}>Increment</button>
    </div>
  )
}

export default FBCStatesEx;