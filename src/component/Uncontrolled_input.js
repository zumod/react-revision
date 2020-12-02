import React, { Component } from 'react'

export default class Uncontrolled_input extends Component {

    constructor(props){ //uses constructor for creating state
        super(props) 
        this.state = {
            firstName: ""
        }
        this.firstInput = React.createRef(); //uses createRef function to refer
    }
// no state is used in the input value
// uses dom properties to access input data
// didnt used react onChange to access data
// in here document.getElementId can be also used
// but we used ref keyword to connect the input box
    onSubmit = () => {
        console.log(this.firstInput.value);
    }

    render() {
        return (
            <div>
            <input type= 'text' name='firstName' ref={ input => this.firstInput = input }/> 
                <button type="submit" onClick={this.onSubmit}>submit</button>
            </div>
        )
    }
}
