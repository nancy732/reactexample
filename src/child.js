import React from 'react';
import './App.css';

class Child extends React.Component{
constructor(props){
super(props)
this.state = {
nameofchildcomponent:"vishnu",


}


}
chanegstate= (event)=>{
console.log("chnage state",event.target.name)
this.setState({nameofchildcomponent:event.target.value})

}




render(){
return(
<div>
<h1>Child {this.props.abc}</h1>
<h1>this is the name{this.state.nameofchildcomponent}</h1>
<input type = "text" name = "name" onChange = {this.chanegstate}/>

</div>



)



}



}
  
export default Child;
