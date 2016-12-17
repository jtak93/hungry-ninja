import React from "react";
import ReactDOM from 'react-dom';
import NavBar from './appbar/AppBarContainer';
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
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}
