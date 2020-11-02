import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder'
import AddReview from '../components/AddReview'
import Reviews from '../components/Reviews'
import StarRating from '../components/StarRating'
import { RestaurantsContext } from '../Context/RestaurantsContext'
import Header from '../components/Header'

const RestaurantDetailsPage = (props) => {
    const {id} = useParams()
    const {selectedRestaurant, setSelectedRestaurant} = useContext(RestaurantsContext)
    
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await RestaurantFinder.get(`/${id}`);
                setSelectedRestaurant(response.data.data)
            }catch(err) {
                console.log(err)
            }
        }
        fetchData();
    },[])
    return(
        <div>
            <Header />
            {selectedRestaurant && (
                <>
                <h1 className="text-center display-4">{selectedRestaurant.restaurant.name}</h1>
                <div className="text-center"><StarRating rating={selectedRestaurant.restaurant.average_rating}/>
                    <span className="text-warning ml-1">
                        {selectedRestaurant.restaurant.count ? `(${selectedRestaurant.restaurant.count})` : "(0)"} 
                    </span>
                </div>
                <div className="mt-3"> 
                    <Reviews reviews={selectedRestaurant.reviews} />
                    </div>
                    <AddReview />
                    <Link to="/restaurants">Return to All Restaurants</Link>
                </>
            )}
        </div>
    ) 
};

export default RestaurantDetailsPage
