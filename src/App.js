import React, { Component } from "react";
import Hooks from "./component/Hooks";
import List from "./component/List";

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Hooks />
                <List />
            </div>
        );
    }
}
