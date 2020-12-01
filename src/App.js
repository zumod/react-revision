import React, { Component } from "react";
import "./App.css";
// import Name from "./component/Name";
// import Age from "./component/Age";
// import Counter from "./component/Counter";
import Forms from "./component/Forms";

export default class App extends Component {
  state = {
    name: "Sumod",
    age: 25,
  };

  handleChange = () => {
    this.setState({
      name: "Sabrina",
      age: 22,
    });
  };

  handleChangeBack = () => {
    this.setState({
      name: "Sumod",
      age: 25,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome</h1>
        {/* <Name nameProp={this.state.name} />
        <Age ageProp={this.state.age} />
        <h2>{this.state.name}</h2>
        <h2>{this.state.age}</h2>
        <button onClick={this.handleChange}>Click me to change</button>
        <button onClick={this.handleChangeBack}>Change back</button>
        <Counter /> */}
        <Forms />
      </div>
    );
  }
}
