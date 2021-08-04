import React,{Component} from "react";

class Forms extends Component {
   
    state={
        firstName:"",
        lastName:""
    };
    onHandleChange=(event)=>{
      
        this.setState({
            [event.target.name]:event.target.value
        });
    };
    onSubmit=()=>{
        console.log(this.state);
    };
    render() { 
        return (
        <form>
             <h1>Form component</h1>
            <input type="text" name="firstName"value={this.state.firstName} onChange={this.onHandleChange}/>
            <input type="text"  name="lastName" value={this.state.lastName} onChange={this.onHandleChange}/>
            <button type="button" onClick={this.onSubmit}>Submit</button>
        </form>);
    }
}
 
export default Forms;