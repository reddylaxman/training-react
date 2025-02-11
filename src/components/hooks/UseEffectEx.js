import React, { useEffect, useState } from 'react'

export const UseEffectEx = () => {
    const [count,setCount]=useState(0);
    const [users,setUsers]=useState([]);
    console.log(users);
  
  //   useEffect(()=>{
  //    setTimeout(()=>{
  //     setCount(600);
      
  //    },5000);
  //    document.title=count;
  // },[])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json().then(data=>{
      // console.log(data);
      setUsers(data)
    })).catch(err=>{
      console.log(err);
    })
  },[])
  return (
    <div>
{/*{count}*/}
    {
        users.map((user,i)=>{
           return (
        //    <div key={i}> 
        //    <h1>{i+1}.{user.name}</h1>
        //    </div>
        // <><h1>{i+1}.{user.name}</h1></>
        <React.Fragment key={i}><h1>{i+1}. {user.name}</h1></React.Fragment>
          
         ) })
      }</div>
  )
}
