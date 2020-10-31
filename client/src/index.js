import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#0d47a1"
        },
        secondary: {
            main: "#d81b60"
        }
    },
});
ReactDOM.render(<ThemeProvider theme={theme}><App /></ThemeProvider>, document.getElementById("root"));
