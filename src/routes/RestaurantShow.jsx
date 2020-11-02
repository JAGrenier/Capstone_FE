import React from 'react'
import AddRestaurant from '../components/AddRestaurant'
import Header from '../components/Header'
import RestaurantList from '../components/RestaurantList'
import GoogleForm from '../components/GoogleForm'
import Map from '../components/Map'


function RestaurantShow() {
    return (
        <div>
            <Header />
            {/* <Map /> */}
            <h1>View all Restaurants with reviews</h1>
            <RestaurantList />
            {/* <h1>Add a restaurant</h1>
            <GoogleForm />
            <AddRestaurant /> */}
        </div>
    )
}

export default RestaurantShow

