import React, { Component } from 'react'

export default class ControlledClassComponent extends Component {
    constructor(){
        super();
        this.state={
            textValue:" ",
            skillValue:"Skill Not selected",
            email:"",
            exp:""
        }
        
    }
    changeMsg=(e)=>{
        this.setState({
            textValue:e.target.value
        })
    }
    changeSkill=(e)=>{
        this.setState({
            skillValue:e.target.value
        })
    }
    changeEmail=(e)=>{
        this.setState({
            email:e.target.value
        })
    }
    changeExp=(e)=>{
        this.setState({
            exp:e.target.value
        })
    }
    handleSubmit=(e)=>{
        alert("Form is submitted successfully "+`${this.state.textValue} and ${this.state.skillValue} ${this.state.email} and ${this.state.exp}`)

    }
  render() {
    

    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <label>Enter your Name</label>
      <input type='text' value={this.state.textValue} onChange={this.changeMsg} />
      <br/>
      <label>Skill</label>
      <select value={this.state.skillValue} onChange={this.changeSkill}>
      <option>React</option>
      <option>Node</option>
      <option>Express</option>
      </select>
      <br/>
      <label>Enter your Email</label>
      <input type='email' value={this.state.email} onChange={this.changeEmail} />
      <br/>
      <label>Experience</label>
      <select value={this.state.exp} onChange={this.changeExp}>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      </select>
      <button type='submit'>Submit</button>
      </form>
      </div>
    )


  }
}
