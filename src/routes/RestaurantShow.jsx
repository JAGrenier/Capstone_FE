import React from 'react'
import Header from '../components/Header'
import RestaurantList from '../components/RestaurantList'
import AddLocation from '../components/AddLocation'
import  Map from '../components/Map'


function RestaurantShow() {
    return (
        <div>
            <Header />
            <Map />
            <br></br>
            {/* <AddLocation /> */}
            <RestaurantList />
        </div>
    )
}

export default RestaurantShow

