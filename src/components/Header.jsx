import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo.png';
import styled from 'styled-components';
import app from "../base"
import Button from '@material-ui/core/Button';
// import {ButtonContainer} from "./Button";

export default class NavBar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm px-sm-5">
                <img src={Logo} className="logo" alt="Socially Accessible Logo with orange skyline and wheelchair icon" />
                <h1 className="header-text"> Socially Accessible Denver</h1>
                    <Button  
                    variant="contained"
                    color="primary" 
                    onClick ={() => {app.auth().signOut()}} 
                    >
                    Sign Out
                    </Button>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav `
    display: flex;
    justify-content: space-between;
    width: 100%;
    background: var(--white);
    .logo{
        height: 5rem;
    }
`