import React from 'react';
import { Router, Route, Link } from 'react-router'
import {Navbar} from 'react-materialize'
const navbarInstance = (props) => {
  return (
    <Navbar brand={props.title} right>
      <Link to='/about'>About</Link>
      <Link to='/menu'>Menu</Link>
      <Link to='/locations'>Locations</Link>
      <Link to='/order'>Order Online</Link>
    </Navbar>
  )
}

export default navbarInstance;
