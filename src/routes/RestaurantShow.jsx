import React from 'react'
import Header from '../components/Header'
import RestaurantList from '../components/RestaurantList'
import GoogleForm from '../components/GoogleForm'



function RestaurantShow() {
    return (
        <div>
          
            <Header />
            <GoogleForm />
            <RestaurantList />
           
        </div>
    )
}

export default RestaurantShow

