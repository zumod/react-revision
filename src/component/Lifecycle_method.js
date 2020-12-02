import React, { PureComponent } from 'react'

export default class Lifecycle_method extends PureComponent {

    //will not work because all lifecycle method is loaded, try using one at a time

    state = {
        goal: 5
    }

    onScoreUpdate=()=>{
        this.setState({
            goal: 10
        })
    }


    componentDidMount(){ // this function will mount at website first load
        // alert()
    }

    componentWillUnmount(){
        //this function will stop working when we switch to other page
    }

    shouldComponentUpdate(){ // uses with PureComponent, it will not re-render page when same data is repeated
        
    }


    render() {
        console.log(this.state.goal)
        return (
            <div>
                <button onClick={this.onScoreUpdate}>score click</button>
            </div>
        )
    }
}
