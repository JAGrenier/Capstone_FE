import React from 'react'
import AddRestaurant from '../components/AddRestaurant'
import Header from '../components/Header'
import RestaurantList from '../components/RestaurantList'
import GoogleForm from '../components/GoogleForm'


function RestaurantShow() {
    return (
        <div>
            <Header />
            
            <h1>Map</h1>
            <h1>View all Restaurants with reviews</h1>
            <RestaurantList />
            <h1>Add a restaurant</h1>
            <GoogleForm />
            <AddRestaurant />
        </div>
    )
}

export default RestaurantShow

