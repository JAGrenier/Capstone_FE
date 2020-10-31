import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../Context/RestaurantsContext'
import StarRating from './StarRating'

const RestaurantList = (props) => {
    const {restaurants, setRestaurants } = useContext(RestaurantsContext)
    let history = useHistory()
   
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await RestaurantFinder.get("/")
                setRestaurants(response.data.data.restaurants)
            } catch (err) {}  
        }
        fetchData(); 
    },[setRestaurants])

    const handleDelete = async (event, id) => {
        event.stopPropagation()
        try{
            const response = await RestaurantFinder.delete(`/${id}`)
            setRestaurants(restaurants.filter(restaurant => {
                return restaurant.id !== id
            }))
        } catch (err) {
            console.log(err)
        }
    };

    const handleUpdate = (event, id) => {
        event.stopPropagation()
        history.push(`/restaurants/${id}/update`)
    }

    const handleRestaurantSelect = (id) => {
        history.push(`/restaurants/${id}`)
    }

    const renderRating = (restaurant) => {
        console.log(restaurant)
        if(!restaurant.count){
            return <span className='text-warning'>0 reviews</span>
        }
        return(
            <>
                <StarRating rating={restaurant.average_rating} />
                <span className="text-warning ml-1">({restaurant.count})</span>
            </>
          ) 
    }

    return (
        <div className="list-group">
            <table className="table table-hover table-dark">
                <thead> 
                    <tr className="bg-primary">
                        <th scope="col">Restaurant</th>
                        <th scope="col">Location</th>
                        <th scope="col">Price Range</th>
                        <th scope="col">Ratings</th>
                        <th scope="col">Add a Review</th>
                        <th scope="col">See All Reviews</th>
                    </tr>
                </thead>
                <tbody> 
                    {restaurants && restaurants.map((restaurant) => {
                        return(
                            <tr>
                                <td>{restaurant.name}</td>
                                <td>{restaurant.location}</td>
                                <td>{"$".repeat(restaurant.price_range)}</td>
                                <td>{renderRating(restaurant)}</td>
                                <td><button onClick={() => handleRestaurantSelect(restaurant.id)} key={restaurant.id} className="btn btn-warning">Add a Review</button></td>
                                <td><button onClick={(event) => handleDelete(event, restaurant.id)} className="btn btn-warning">View Reviews</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            
        </div>
    )
}

export default RestaurantList
