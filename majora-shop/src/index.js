import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
    palette: {
      type: 'dark', // Switching the dark mode on is a single property value change.
    },
    typography: {
      useNextVariants: true,
    },
    
  });
  

ReactDOM.render(<BrowserRouter><MuiThemeProvider theme={theme}><App /></MuiThemeProvider></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
