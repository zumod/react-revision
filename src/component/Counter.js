import React, { Component } from "react";

export default class Counter extends Component {

    state = { // state declared
        counter: 0
    }

    onIncrement = () => {
        this.setState({
            counter: this.state.counter + 1 // incrementing the previous state  + 1
        })
    }
    

  render() {
    return (
      <div className="Counter">
        <h1>Counter Component</h1>
        <h4>{this.state.counter}</h4>
        <button onClick = {this.onIncrement}>Increment</button>
        <button onClick = {()=>{this.setState({counter: this.state - 1})}}>Decrement</button> //can be also written inline
      </div>
    );
  }
}
