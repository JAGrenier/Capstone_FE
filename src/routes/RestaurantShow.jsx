import React from 'react'
import Header from '../components/Header'
import RestaurantList from '../components/RestaurantList'
import  Map from '../components/Map'
import AddReview from '../components/AddReview'



function RestaurantShow() {
    return (
        <div>
          
            <Header />
            <Map />
            <br></br>
            <RestaurantList />
           
        </div>
    )
}

export default RestaurantShow

