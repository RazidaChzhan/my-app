import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';


const theme = createMuiTheme({
    typography: {
      fontFamily: [
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        ].join(','),
    },
    palette: {
      primary: {
          main: '#2FA2BC'
      },
      secondary: {
          main: '#222222',
      },
    }
    
  });


ReactDOM.render(
<ThemeProvider theme={theme}>
<Router>
    <App />
</Router>
</ThemeProvider>, document.getElementById('root'));

