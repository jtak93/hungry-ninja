import React from 'react';
import Navbar from './Navbar'

export default class NavbarContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  // render
  render() {
    return (
      <Navbar title="Hungry Ninja" />
    );
  }
}
