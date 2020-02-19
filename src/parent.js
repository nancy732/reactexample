import React from 'react';
import './App.css';
import Child from "./child"

class Parent extends React.Component{
constructor(props){
super(props)
this.state = {
name:"shubham",
age:99

}
}
chanegstate= (event)=>{
console.log("chnage state",event.target.name)
this.setState({name:event.target.value})

}

render(){
return(
<div>
<h1>parent Component</h1>
<h1>this is the age{this.state.age}</h1>
<h1>this is the name{this.state.name}</h1>
<input type = "text" name = "name" onChange = {this.chanegstate}/>
<Child abc = {this.state.name} />

</div>



)



}



}
  
export default Parent;
