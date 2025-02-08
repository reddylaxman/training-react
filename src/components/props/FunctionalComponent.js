import React from 'react'
import styles from "../mystyle.module.css"
export const FunctionalComponent = (props) => {
    let applyStyle=props.apply?'heading':"";
    const inlineStyles={
color:"red",
backgroundColor:"green"
    };
  return (
    <div>
    <h1 className={`${applyStyle} font-style`}>Welcome to web page</h1>
    <h2 style={inlineStyles}>{props.clg}</h2>
    <h2 className={styles.msg}>{props.msg}</h2></div>
  )
}
