import React from 'react'
import { Link } from 'react-router-dom'
import AddRestaurant from '../components/AddRestaurant'
import Header from "../components/Header"
import RestaurantList from '../components/RestaurantList'

const Home = () => {
    return (
        <div>
            <Header />
            <img className="header-image" src="https://images.unsplash.com/photo-1575037614876-c38a4d44f5b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"></img>
            <RestaurantList />
            <Link   to="/restaurants">View all Restaurants</Link>
        </div>
    )
}

export default Home
