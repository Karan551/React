import React from 'react'
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    return (
      <>
        <nav>
          <a href="##" className="logo-nav">
            Git Explorer
          </a>
          <div className="link-cont">
            <NavLink to="/">Home</NavLink>
            <a href="##">Repos</a>
            <NavLink to="users">Users</NavLink>
            {/* <NavLink to="about">About Us</NavLink> */}
            <NavLink to="about">About Us</NavLink>
          </div>
        </nav>
      </>
    );
  };
  
  export default NavBar;