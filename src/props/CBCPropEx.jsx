import React, { Component } from "react";

export default class CBCPropEx extends Component {
  render() {
    console.log(this);
    return (
      <div >
        <h1>{this.props.username}</h1>
        <h2>{this.props.age}</h2>
        {
          this.props.hobbies.map(hobby=>{
            return <li>{hobby}</li>
          })
        }
        <h1>{this.props.address.city}</h1>
        <h1>{this.props.address.area}</h1>
        <button onClick={this.props.sendFun}>Click</button>
      </div>
    );
  }
}
