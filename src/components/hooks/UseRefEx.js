import React, { useEffect, useRef, useState } from 'react'
import video from "./video.mp4";
import AUDIO from "./ANIMAL.mp3"
export const UseRefEx = () => {
const [play,setPlay]=useState(true);
const [audioPlay,setAudioPlay]=useState(true);
 const eleRef= useRef();
 const videoRef= useRef();
 const audioRef=useRef();

// useEffect(()=>{
//   eleRef.current.style.color="teal"
//   eleRef.current.innerText="React Ref"
// })
//  console.log(eleRef)
// console.log(videoRef);
// const playVideo=()=>{
//     videoRef.current.play()
//     console.log(play);
//     setPlay(false)
// }
// const pauseVideo=()=>{
 
//     videoRef.current.pause()
//     console.log(play);
//     setPlay(true)

// }
// const playOrPause=()=>{
//   if(play){
//     videoRef.current.play()
//     console.log(play);
//     setPlay(false)
//   }else{
//     videoRef.current.pause()
//     console.log(play);
//     setPlay(true)
//   }
// }
const audioPlayPause=()=>{
  if(audioPlay){
    audioRef.current.play()
    console.log(audioPlay);
    setAudioPlay(false)
  }else{
    audioRef.current.pause()
    console.log(audioPlay);
    setAudioPlay(true)
  }
}

  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>
    {/*<h1 ref={eleRef}>RefExample</h1>
    <video src={video}  ref={videoRef} />
    <button onClick={playOrPause}>{play?"Play":"Pause"}</button>*/}
    <img src="https://m.media-amazon.com/images/I/61OmlO9stnL.jpg" style={{width:"400px",height:"500px",borderRadius:"50px", cursor:"pointer"}} onClick={audioPlayPause}/>
    <audio ref={audioRef} src={AUDIO}/>
    
    </div>
  )
}
