import React, { useEffect, useContext } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../Context/RestaurantsContext'

const RestaurantList = (props) => {
    const {restaurants, setRestaurants } = useContext(RestaurantsContext)
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await RestaurantFinder.get("/")
                setRestaurants(response.data.data.restaurants)
            } catch (err) {}  
        }
        fetchData(); 
    },[])

    return (
        <div className="list-group">
            <table className="table table-hover table-dark">
                <thead> 
                    <tr className="bg-primary">
                        <th scope="col">Restaurant</th>
                        <th scope="col">Location</th>
                        <th scope="col">Price Range</th>
                        <th scope="col">Ratings</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody> 
                    {restaurants && restaurants.map((restaurant) => {
                        return(
                            <tr key={restaurant.id}>
                                <td>{restaurant.name}</td>
                                <td>{restaurant.location}</td>
                                <td>{"$".repeat(restaurant.price_range)}</td>
                                <td>reviews</td>
                                <td><button className="btn btn-warning">Update</button></td>
                                <td><button className="btn btn-danger">Delete</button></td>
                            </tr>
                        )
                    })}
                    {/* <tr>
                        <td>Jenn's Bagels</td>
                        <td>RiNo</td>
                        <td>$$</td>
                        <td>5 stars!</td>
                        <td><button className="btn btn-warning">Update</button></td>
                        <td><button className="btn btn-warning">Update</button></td>
                    </tr>
                    <tr>
                        <td>AJ's Coffee</td>
                        <td>Capital Hill</td>
                        <td>$</td>
                        <td>2 stars!</td>
                        <td><button className="btn btn-warning">Update</button></td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr> */}
                </tbody>
            </table>
            
        </div>
    )
}

export default RestaurantList
