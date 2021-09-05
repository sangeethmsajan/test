import React, { Component } from "react";

export class List extends Component {
  state = {
    data: [{ id: 1, name: "john", age: 45 },{ id: 2, name: "Rahul", age: 44 }],
  };
  render() {
    return (  <div>
        <ul>{this.state.data.map((value,index)=>(
            <li key={value.id}>{value.id}-{value.name}</li>
        ))}</ul>
    </div>);
  }
}

export default List;
