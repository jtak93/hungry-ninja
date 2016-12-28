import React from 'react';
var $ = require('jquery');
import {Navbar, NavItem, SideNav} from 'react-materialize'
const navbarInstance = (props) => {
  return (
    <Navbar brand={props.title} right>
      <NavItem href='/about'>About</NavItem>
      <NavItem href='components.html'>Menu</NavItem>
      <NavItem href='components.html'>Locations</NavItem>
      <NavItem href='components.html'>Order Online</NavItem>
    </Navbar>
  )
}

export default navbarInstance;
