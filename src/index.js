import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#ffEBC2',
            main: '#FF931F',
            dark: '#FFAF47',
            contrastText: '#fff',
        },
        secondary: {
            light: '#E04B00',
            main: '#E04B00',
            dark: '#E04B00',
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
