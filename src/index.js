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
            light: '#af4831',
            main: '#af4831',
            dark: '#af4831',
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
