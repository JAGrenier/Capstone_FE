import React, { useContext, useState } from 'react'
import RestaurantFinder from "../apis/RestaurantFinder"
import { RestaurantsContext } from '../Context/RestaurantsContext'

const AddRestaurant = ({position}) => {
    const {addRestaurants} = useContext(RestaurantsContext);
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const handleSubmit = async (event) => {
        event.preventDefault()
        try{ 
            const response = await RestaurantFinder.post("/", {
                name, 
                lat: position.lat, 
                lng: position.lng,
                image
            });
            addRestaurants(response.data.data.restaurant)
            // console.log(response)
        } catch (err){

        }
    }
    return (
        <div className="mb-4">
            <form action="">
                <div className="form-row">
                <div className="col">
                    <input 
                    type="text" 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                    className="form-control" 
                    placeholder="name" />
                </div> 
                <div className="col">
                    <input 
                    value={image} 
                    onChange={e => setImage(e.target.value)} 
                    className="form-control" 
                    type="text" 
                    placeholder="image" 
                    />
                </div>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddRestaurant
