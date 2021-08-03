import React, { Component } from "react";
import "./App.css";
import Todo from "./component/Todo";

class App extends Component {
  state = {
    myStringOne:"Debug",
    myStringTwo : "Two"
  };
  render() { 
    return ( 
      <div className="App">
        <h1>{this.state.myStringOne}</h1>
       <Todo myStringOne={this.state.myStringOne}/>
      </div>
     );
  }
}
 
export default App;
// end
