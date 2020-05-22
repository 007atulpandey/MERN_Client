import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom'
function Nav() {
  
  return (
    <div>
    <nav>
    <div className="nav-change nav-wrapper ">
      <Link to="/" className=" brand-logo"
      style={{
       "font-family": "'Great Vibes', cursive",
        "font-weight":"bold"
      }}   >MyShareApp</Link>
      <ul id="nav-mobile" className=" right hide-on-med-and-down">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/createpost">CreatePost</Link></li>
      </ul>
    </div>
  </nav>
    <ul class="sidenav" id="mobile-demo">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/createpost">CreatePost</Link></li>
  </ul>
    
    </div>
  );
}

export default Nav;
