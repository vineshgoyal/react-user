import React from 'react';
import { withRouter } from 'react-router-dom';
class Home extends React.Component{
   
    constructor(props){
       super(props);
       // init
       this.state = {
            color: "red"
       }
       
       this.state.title = this.props.title;
       if(this.props.title== "Im home"){
           this.state.title = "I am home";
       }
       
    }
    
    render(){
        console.log("this.p", this.props)
        return <h1 style={{color: this.state.color}} >{this.state.title}</h1>
    }
}

export default withRouter(Home);