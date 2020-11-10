import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder'
import AddReview from '../components/AddReview'
import Reviews from '../components/Reviews'
import StarRating from '../components/StarRating'
import { RestaurantsContext } from '../Context/RestaurantsContext'
import Header from '../components/Header'
import { Button } from '@material-ui/core'


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
                <header align="center">
                    <h1>{selectedRestaurant.restaurant.name}</h1>
                        <div><StarRating rating={selectedRestaurant.restaurant.average_rating}/>
                        <span>
                        {selectedRestaurant.restaurant.count ? `(${selectedRestaurant.restaurant.count})` : "(0)"} 
                        </span>
                        <br></br>
                        <Button 
                            variant="contained"
                            color="primary" 
                            href={`https://www.google.com/maps/search/?api=1&query=${selectedRestaurant.restaurant.lat},${selectedRestaurant.restaurant.lng}`}>
                                Link to Google Maps
                        </Button>
                    </div> 
                </header>
                <br></br>
                
                
                <Reviews reviews={selectedRestaurant.reviews} />
                <Link to="/" >
                    <Button  
                    variant="contained"
                    color="primary" 
                    style={{maxWidth: "10rem", marginTop: "1rem"}}
                    to="/restaurants">
                    Return to Map
                    </Button>
                </Link>
                <AddReview />
                    
                </>
            )}
        </div>
    ) 
};

export default RestaurantDetailsPage
