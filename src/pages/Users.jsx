import React from 'react';
import UserDetail from './UserDetail';
import UserList from './UserList';
import {Route} from 'react-router-dom'

class Users extends React.Component{
  
    render(){
        return <div>
                <Route path={this.props.match.path + "/"  } exact component={UserList} />
                <Route path={this.props.match.path + '/:userId' } component={UserDetail} />
    
        </div>
    }
}

export default Users;
