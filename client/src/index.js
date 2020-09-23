import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#1976d2" // This is an orange looking color
        },
        secondary: {
            main: "#f50057" //Another orange-ish color
        }
    },
});
ReactDOM.render(<ThemeProvider theme={theme}><App /></ThemeProvider>, document.getElementById("root"));
