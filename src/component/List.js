import React, { Component } from "react";

export default class List extends Component {
    state = {
        data: [
            {
                id: 1,
                name: "John",
                age: 30,
            },
            {
                id: 2,
                name: "Sumod",
                age: 25,
            },
            {
                id: 3,
                name: "Rachel",
                age: 22,
            },
            {
                id: 4,
                name: "Aneena",
                age: 23,
            },
            {
                id: 5,
                name: "Neenu",
                age: 24,
            },
            {
                id: 6,
                name: "Sajo",
                age: 25,
            },
        ],
    };
    render() {
        return (
            <div>
                <h1>List Component</h1>
                <ul>
                    {this.state.data.map((value, index, array) => // key is set to a unique value to update a child prop only
                            <li key={value.id}>
                                {value.age}-{value.id}-{value.name}
                            </li>
                    )}
                </ul>
            </div>
        );
    }
}
