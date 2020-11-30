import React, { Component } from "react";
import "./App.css";
import Name from "./component/name";
import Age from "./component/age";

export default class App extends Component {
  state = {
    name: "Sumod",
    age: 25,
    life: "null",
  };

handleChange = () => {
  this.setState({
    name: "John",
    age: 30
  })
}
handleChange1 = () => {
  this.setState({
    name: "Sumod",
    age: 25
  })
}


  render() {
    return (
      <div className="App">
        <h1>Welcome to the app</h1>
        <Name name={this.state.name}/>
        <Age age={this.state.age}/>
        <button onClick={this.handleChange}>Click me</button>
        <button onClick={this.handleChange1}>Go back</button>
      </div>
    );
  }
}
