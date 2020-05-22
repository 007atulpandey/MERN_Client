import React,{Component} from 'react';
import Nav from './components/Nav';
import {BrowserRouter as Router , Switch,Route} from 'react-router-dom'

import './App.css';

import Home from './components/screens/Home'
import Login from './components/screens/Login'
import Signup from './components/screens/Signup'
import Profile from './components/screens/Profile'
import CreatePost from './components/screens/createpost'
import './font.css'
function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
     
      <Route path='/' exact >
          <Home/>
      </Route>
      <Route path='/login' exact >
          <Login/>
      </Route>
      <Route path='/signup' exact >
          <Signup/>
      </Route>
      <Route path='/profile' exact >
          <Profile/>
      </Route>
      <Route path='/createpost' exact >
          <CreatePost/>
      </Route>
        
    </div>
    </Router>
  );
}

// const Home=()=>{
//   return (
//     <h1>
//       Home page
//       </h1>
//   )
// }

export default App;
