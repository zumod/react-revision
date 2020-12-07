import React, { Component } from "react";

export default class Forms extends Component {

  state = {
    firstName: '',
    lastName: ''
  }
  
  myChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  myClick = (event) => {
    event.preventDefault();
    console.log(this.state)
  }

  render() {
    return (
      <form>
        <h1>Form Component</h1>
        <input type="text" name='firstName' onChange={this.myChange} placeholder='firstname'/>
        <input type="text" name='lastName' onChange={this.myChange} placeholder='lastname'/>
        <button onClick={this.myClick}>submit</button>
      </form>
    );
  }
}
