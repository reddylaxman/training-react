import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(){
       
        super();
        this.state={msg:"Click the below button to invert the color"
            ,flag:true
        }
        
    }
    changeMsg=()=>{
        this.setState({msg:"Inverted the color",flag:false})
        
    }
  render() {
    let applyStyle=this.state.flag?'msg1':"msg2";
    return (
      <div>
      <h1 className={applyStyle}>{this.state.msg}</h1>
      <button onClick={this.changeMsg}>Invert color</button></div>
    )
  }
}
