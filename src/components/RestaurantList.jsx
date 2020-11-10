import React, { useEffect, useContext } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../Context/RestaurantsContext'
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import RestaurantCard from './RestaurantCard';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth:1000,
        flexGrow: 1,
        alignItems: "center"
    },
    media: {
        height: 0,
        paddingTop: "56.25%" // 16:9
    },
}));

const RestaurantList = ( ) => {
    const {restaurants, setRestaurants } = useContext(RestaurantsContext)

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await RestaurantFinder.get("/")
                setRestaurants(response.data.data.restaurants)
            } catch (err) {}  
        }
        fetchData(); 
    },[setRestaurants])
    
    const classes = useStyles();

    return (
        <div className={classes.root}> 
        <Grid 
        container 
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        >
                    {restaurants && restaurants.map((restaurant) => {
                        return(
                            <>
                        <Grid 
                        item 
                        xs={12}
                        sm={6}
                        md={3}
                        >
                            <RestaurantCard key={restaurant.id+restaurant.name} restaurant={restaurant} />
                            </Grid>
                            </>
                        )
                    })}
            </Grid>
        </div>
    )
}

export default RestaurantList
