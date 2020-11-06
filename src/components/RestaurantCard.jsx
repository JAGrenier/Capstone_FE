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
        alignItems: "center"
    },
    media: {
        height: 0,
        paddingTop: "56.25%" // 16:9
    },
}));

export default function RestaurantCard({restaurant}) {
    const classes = useStyles();
    return (
        <div>

<Card className="restaurant-card" > 

                                <CardHeader
                                    title={restaurant.name}
                                    key={restaurant.name}
                                    />
                                        <CardMedia
                                        className={classes.media}
                                        image={restaurant.image}
                                        />
                                            <CardContent>
                                                <Typography variant="body2" color="textPrimary" component="p">
                                                {/* <span>{renderRating(restaurant)}</span> */}
                                                </Typography>
                                            </CardContent>
                                <Button 
                                    className="card-button"
                                    variant="contained"
                                    color="primary"  
                                    // onClick={() => handleRestaurantSelect(restaurant.id)} 
                                    key={restaurant.id}>
                                Add Review & View Details
                                </Button>
                            </Card>        
                            </div>
    )
}
