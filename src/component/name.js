import React, { Component } from "react";

export default class Name extends Component {
  render() {
    return (
      <div>
        <h1>Name Component</h1>
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}
