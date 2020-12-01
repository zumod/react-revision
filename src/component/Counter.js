import React, { Component } from "react";

export default class Counter extends Component {

    state = {
        counter: 0
    }

    onIncrement = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    
    onDecrement = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

  render() {
    return (
      <div className="Counter">
        <h1>Counter Component</h1>
        <h4>{this.state.counter}</h4>
        <button onClick = {this.onIncrement}>Increment</button>
        <button onClick = {this.onDecrement}>Decrement</button>
      </div>
    );
  }
}
