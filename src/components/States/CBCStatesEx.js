import React, { Component } from 'react'

 class CBCStatesEx extends Component {
    constructor(){
        super();
        this.state={
            users:["Laxman Reddy","ASL"],
            num:0
        }
    }
    changeNumber=()=>{
        this.setState({num:this.state.num+1});
    }
  render() {
    console.log(this);
    return (
      <div>
      {
        this.state.users.map((user,i)=>{
            return <li key={i}>{user}</li>
        })
      }
      {this.state.num}
      <button onClick={this.changeNumber}>Increment</button>
    </div>
    )
  }
}

export default CBCStatesEx;
