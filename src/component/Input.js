import React, { Component } from 'react'

export default class Input extends Component {

    state={
        firstName: '',
        lastName: ''
    }

    inputHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }


    render() {
        return (
            <div>
                <h1>Input Component</h1>
                <input type="text" name='firstName'onChange={this.inputHandler} placeholder='First Name'/>
                <br/>
                <input type="text" name='lastName'onChange={this.inputHandler} placeholder='Last Name'/>
                <br/>
                <button onClick={this.onSubmit}>Submit</button>
            </div>
        )
    }
}
