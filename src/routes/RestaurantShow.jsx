import React from 'react'
import Header from '../components/Header'
import RestaurantList from '../components/RestaurantList'
import AddLocation from '../components/AddLocation'
import AddForm from '../components/AddForm'
import  Map from '../components/Map'


function RestaurantShow() {
    return (
        <div>
            <Header />
            <Map />
            <br></br>
            <AddForm   />
            <RestaurantList />
        </div>
    )
}

export default RestaurantShow

