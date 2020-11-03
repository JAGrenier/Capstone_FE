import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../Context/RestaurantsContext'
import StarRating from './StarRating';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth:1000,
        flexGrow: 1,
    },
    media: {
        height: 0,
        paddingTop: "56.25%" // 16:9
    },
}));

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


    const handleRestaurantSelect = (id) => {
        history.push(`/restaurants/${id}`)
    }

    const renderRating = (restaurant) => {
        if(!restaurant.count){
            return <span color='primary'>0 reviews</span>
        }
        return(
            <>
                <StarRating rating={restaurant.average_rating} key={restaurant.id} />
                <span color="primary">({restaurant.count})</span>
            </>
        ) 
    }

    
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
                            <Card>
                                <CardHeader
                                    title={restaurant.name}
                                    key={restaurant.name}
                                    />
                                        <CardMedia
                                        className={classes.media}
                                        image="https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80jpg"
                                        />
                                            <CardContent>
                                                <Typography variant="body2" color="textPrimary" component="p">
                                                <span>{renderRating(restaurant)}</span>
                                                </Typography>
                                            </CardContent>
                                <Button 
                                    variant="contained"
                                    color="secondary"  
                                    onClick={() => handleRestaurantSelect(restaurant.id)} 
                                    key={restaurant.id}>
                                Views Details
                                </Button>
                            </Card>
                            </Grid>
                            </>
                        )
                    })}
            
            </Grid>
        </div>
    )
}

export default RestaurantList
