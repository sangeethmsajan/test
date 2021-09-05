import React,{Component} from "react";

class Forms extends Component {
   
    state={
        firstName:"",
        lastName:""
    };
    onHandleChange=(event)=>{ //arrow functions maximum use chyanam.athile ee section work aavu
      
        this.setState({
            [event.target.name]:event.target.value //ivide input box values separate aai kittum
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