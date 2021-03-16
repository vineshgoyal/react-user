import React, {lazy, Suspense} from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Users from './pages/Users'
import Loader from './pages/Loader';



const Home = lazy(() =>{
  return import('./pages/Home');
})



class App extends React.Component {
  render() {
    return <div>
      
        <BrowserRouter>
          <Link to="/" className="link" >Home</Link>
          <Link to="/users" className="link">Users</Link>


           <Route path="/" exact>
            <Suspense fallback={<Loader />}>
              <Home title="Im home" />
            </Suspense>
          </Route> 
           
          <Route path="/users" component={Users} />
        </BrowserRouter>
    </div>
  }
}

export default App;