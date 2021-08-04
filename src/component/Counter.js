import React, {Component} from "react";

class Counter extends Component {

    // firstClick(){
    //     console.log('working');
    // }

    // firstClick=()=>{
    //     console.log('working');
    // }  arrow function using button click.modern methods using arrow fuctions.

    state ={
        counter:0
    };
    onIncrement=()=>{
        this.setState({
            counter:this.state.counter+1
        })
    }

    onDecrement=()=>{
        this.setState({
            counter:this.state.counter-1
        })
    }

    
    render() { 
        return <div><h2>Counter Component</h2>
        <h4>{this.state.counter}</h4>
        <button onClick={this.onIncrement}>+</button>
        <button onClick={this.onDecrement}>-</button>
         </div>
        
    }
}
 
export default Counter ;