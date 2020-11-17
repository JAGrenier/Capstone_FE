import React from 'react'
import Header from '../components/Header'
import RestaurantList from '../components/RestaurantList'
import  Map from '../components/Map'

function RestaurantShow() {
    return (
        <div>
            <Header key={Math.random()} />
            <Map key={Math.random()}  />
            <br></br>
            <RestaurantList key={Math.random()} />
        </div>
    )
}

export default RestaurantShow