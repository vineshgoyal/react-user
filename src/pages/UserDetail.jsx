import React from 'react';
import axios from 'axios';
import UserListHeader from './UserListHeader';
import { withRouter } from 'react-router';
import './userDetail.css';
class UserDetail extends React.Component{
    state = {
        user: {},
        updating: false,
        tempUser: {}
    }
 
    componentDidUpdate(props, state){
        console.log("update", props, state)
       
    }
    componentDidMount(){
        console.log("mount")
        axios.get("https://jsonplaceholder.typicode.com/users/" +this.props.match.params.userId )
        .then( (res)=>{
            this.state.user = res.data;
            this.setState(this.state)
        } )
    }

    editBtn(){
        this.state.tempUser.name = this.state.user.name
        this.state.tempUser.username = this.state.user.username
        this.state.updating = true;
        this.setState(this.state)
    }

   
    updateNameInfo(event){
        console.log('event:', event.target.value)
        this.state.tempUser.name = event.target.value;
        this.setState(this.state)
    }


    updateUserNameInfo(event){
        console.log('event:', event.target.value)
        this.state.tempUser.username = event.target.value;
        this.setState(this.state)
    }

    cancelBtn(){
        this.state.updating = false;
        this.state.tempUser = {};
        this.setState(this.state);
    }

    updateBtn(){
        console.log("old value",  this.state.user);
        console.log("new value", this.state.tempUser)
        this.state.user.name = this.state.tempUser.name;
        this.state.user.username = this.state.tempUser.username;
        this.state.tempUser = {};
        console.log("after update nw value", this.state.user);
        this.state.updating = false;
        this.setState(this.state);
    }

    userInfo(){
        return <div>
                <h1>Name: <span className="text-muted" >{this.state.user.name}</span></h1>
                <h1>Username: <span className="text-muted" >{this.state.user.username}</span></h1>
                <h1>Email: <span className="text-muted" >{this.state.user.email}</span></h1>
                <button onClick={this.editBtn.bind(this)} >Edit</button>
            </div>
    }


    userInfoForm(){
        return <div>
                <h1>Name: <input className="text-muted" value={this.state.tempUser.name} onChange={ this.updateNameInfo.bind(this) } /></h1>
                <h1>Username: <input className="text-muted" value={this.state.tempUser.username} onChange={ this.updateUserNameInfo.bind(this) } /></h1>
                <h1>Email: <span className="text-muted" >{this.state.user.email}</span></h1>
                <button onClick={this.updateBtn.bind(this)} >Update</button>
                <button onClick={this.cancelBtn.bind(this)} >Cancel</button>
        </div>
    }

    render(){
        let data = null;
        if(this.state.updating){
            data = this.userInfoForm();
        }else {
            data = this.userInfo();
        }
        
        return <div>
                <UserListHeader title="User Detail" />
           
                
                <img src={"/images/img"+ this.props.match.params.userId  +".png"} alt={this.state.user.name}/>
                {data}
        </div>

    }
}

export default withRouter(UserDetail);