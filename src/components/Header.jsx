import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo.png'
import Navbar from 'react-bootstrap/Navbar'
import styled from 'styled-components';


export default class NavBar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm px-sm-5">
                <Link to="/" >
                <img src={Logo} className="logo" alt="logo"/>
                </Link>
                <p>Login</p>
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
        height: 8rem;
    }
`