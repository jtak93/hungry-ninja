import React from "react";
import ReactDOM from 'react-dom';
import NavbarContainer from './navbar/NavbarContainer';
import "../scss/main.scss";


// app component
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  // render
  render() {

    return (
      <div>
        <NavbarContainer />
        {this.props.children}
      </div>
    );
  }
}
