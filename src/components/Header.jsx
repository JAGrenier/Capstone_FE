import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import LogoTextRight from '../Logo.png';
import styled from 'styled-components';
import app from "../base"
import Button from '@material-ui/core/Button';

export default class NavBar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm px-sm-5">
                <img src={LogoTextRight} className="logo" alt="Socially Accessible Logo with orange skyline and wheelchair icon" />
                <h1 className="header-text"> Socially Accessible Denver</h1>
                <Link to="/" >
                    <Button  
                    fullWidth
                    variant="contained"
                    color="primary" 
                    onClick ={() => app.auth().signOut()} to="/">
                    Sign Out
                    </Button>
                </Link>
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