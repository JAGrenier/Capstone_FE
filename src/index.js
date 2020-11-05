import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#C71F37',
            main: '#B21E35',
            dark: '#C71F37',
            contrastText: '#fff',
        },
        secondary: {
            light: '#85182A',
            main: '#85182A',
            dark: '#85182A',
            contrastText: '#000',
        },
    },
    });


ReactDOM.render(
    <MuiThemeProvider theme={theme}> 
        <App /> 
    </MuiThemeProvider>,
    document.getElementById("root")
)
