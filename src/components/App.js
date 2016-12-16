import React from "react";
import ReactDOM from 'react-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import NavBar from './appbar/appbar';
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
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <NavBar />
        </MuiThemeProvider>
        {this.props.children}
      </div>
    );
  }
}
