import React from 'react';
console.log("user list component loaded")
class UserListHeader extends React.Component{
  
    render(){
       
        console.log(this.props);
        return <h1 style={{
            fontSize: "40px", color: this.props.color
        }}>{ this.props.title }</h1>
    }
}

UserListHeader.defaultProps = {
    color: "blue"
}

export default UserListHeader;