import React from 'react'
import Header from "../components/Header"
import Login from './Login'
import app from "../base"
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div>
            {/* <img src="https://images.unsplash.com/photo-1575037614876-c38a4d44f5b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" className="header-image" /> */}
            <Login  />
            <Link to="/SignUp">First time here? Sign up!</Link>
        </div>
    )
}

export default Home
