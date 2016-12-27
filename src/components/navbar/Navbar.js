import React from 'react';
import {Navbar, NavItem} from 'react-materialize'
const navbarInstance = (props) => {
  return (
    <Navbar brand={props.title} right>
      <NavItem href='get-started.html'>About</NavItem>
      <NavItem href='components.html'>Menu</NavItem>
      <NavItem href='components.html'>Locations</NavItem>
      <NavItem href='components.html'>Order Online</NavItem>
    </Navbar>
  )
}

export default navbarInstance;
