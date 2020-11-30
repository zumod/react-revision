import React, { Component } from "react";

export default class Age extends Component {
  render() {
    return (
      <div>
        <h1>Age</h1>
        <h2>{this.props.age}</h2>
      </div>
    );
  }
}
