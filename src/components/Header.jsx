import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo.png'
import Navbar from 'react-bootstrap/Navbar'
import styled from 'styled-components';
import app from "../base"


export default class NavBar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm px-sm-5">
                <img src={Logo} className="logo" alt="logo"/>
                <Link to="/" >
                <button onClick ={() => app.auth().signOut()} to="/">Sign Out</button>
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