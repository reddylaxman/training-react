import React from 'react'

// export const FBCPropEx = (props) => {
//   return (
//     <div>
//     <h1>{props.username}</h1>
//     {
//       props.isMarried?"Married":"UnMarried"
//     }</div>
//   )
// }



export const FBCPropEx = (a) => {
  if(a.isMarried){
    return <div><h1>{a.username} is a married person</h1>
    {
        a.hobbies.map(hobby=>{
            return <li>{hobby}</li>
        })
    }</div>
  }else{
    return<h1>{a.username} is a unmarried person</h1>
  }
}
