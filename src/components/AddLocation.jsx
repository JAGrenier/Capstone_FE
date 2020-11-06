
import React, { useContext, useState } from 'react'
import RestaurantFinder from "../apis/RestaurantFinder"
import { RestaurantsContext } from '../Context/RestaurantsContext'
import Search from "../components/MapComponents/Search"

const AddRestaurant = () => {
    const {addRestaurants} = useContext(RestaurantsContext);
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [priceRange, setPriceRange] = useState("Price Range")
    const handleSubmit = async (event) => {
        event.preventDefault()
        try{ 
            const response = await RestaurantFinder.post("/", {
                name, 
                location,
                price_range: priceRange
            });
            addRestaurants(response.data.data.restaurant)
            // console.log(response)
        } catch (err){

        }
    }
    return (
        <>
                   <Search /> 
                <button type="submit" onClick={handleSubmit} className="btn btn-primary">Add</button>
         </>
    )
}

export default AddRestaurant