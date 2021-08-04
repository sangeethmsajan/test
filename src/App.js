import React, { Component } from "react";
import "./App.css";
import Todo from "./component/Todo";
// import Counter from "./component/Counter";
import Forms from "./component/Forms";

class App extends Component {
  state = {
    myStringOne:"Debug media",
    myStringTwo : "Two"
  };
  render() { 
    return ( 
      <div className="App">
        <h1>{this.state.myStringOne}</h1>
        <h1>{this.state.myStringTwo}</h1>
       <Todo myStringOne={this.state.myStringOne}/>
       {/* <Counter /> */}
       <Forms />
      </div>
     );
  }
}
 
export default App;

