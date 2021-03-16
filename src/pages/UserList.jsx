import React, { Suspense, lazy } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
console.log("user list load");
const UserListHeader = lazy(() => {
    return import('./UserListHeader');
})
class UserList extends React.Component {
    state = {
        users: [],
        removedUsers: []
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            this.state.users = res.data;
            this.setState(this.state)
        })
    }


    deleteItem(index){
        console.log("delete item", this.state.users, index)
        let removedUser = this.state.users.splice(index,1);
        this.state.removedUsers.push(removedUser[0])
        console.log('this.state.removedUsers:', this.state.removedUsers)
        this.setState(this.state);
    }

    
    render() {
        return <div>
            <Suspense fallback="loading">
                <UserListHeader title="User List" />
            </Suspense>
            <ul>
                {
                    this.state.users.map((singleUser, index) => {
                        return <li key={singleUser.id}>
                            <Link to={this.props.match.path + singleUser.id} >
                                <h1>{singleUser.name} </h1>
                            </Link>
                            <button onClick={ ()=>{
                                this.deleteItem(index)
                            } }>Delete</button>
                        </li>
                    })
                }
            </ul>
            
        </div>
    }
}

export default UserList;