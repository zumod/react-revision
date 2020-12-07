import React, { Component } from "react";
import Hooks from "./component/Hooks";

export default class App extends Component {
    render() {
        console.log("parent component");
        return (
            <div>
                <Hooks />
            </div>
        );
    }
}
