import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CssBaseline from 'material-ui/CssBaseline';

import { default as Home } from './pages/Home/index';

import { createMuiTheme } from 'material-ui/styles';

import red from 'material-ui/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#9162e4',
      main: '#5e35b1',
      dark: '#280680',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ff5c8d',
      main: '#d81b60',
      dark: '#a00037',
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontSize: 16,
    headline: {
      fontSize: 36,
      color: 'rgba(0, 0, 0, 0.7)',
    },
    title: {
      color: 'rgba(0, 0, 0, 0.7)',
    },
  },
});

class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <Home />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
