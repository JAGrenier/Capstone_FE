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
            {/* <GoogleForm /> */}
            <RestaurantList />
           
        </div>
    )
}

export default RestaurantShow

