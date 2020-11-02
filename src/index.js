import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme(
    {
        palette: {
            primary: {
                main: '#f57c00',
                light: '#ffad42',
                dark: '#bb4d00'
            },
            secondary:{
                main: '#ffb300',
                light: '#ffe54c',
                dark: '#c68400'
            },
        },
      }
)


ReactDOM.render(
    <MuiThemeProvider theme={theme}> 
        <App /> 
    </MuiThemeProvider>,
    document.getElementById("root")
)
