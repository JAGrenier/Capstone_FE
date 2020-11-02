import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../Context/RestaurantsContext'
import StarRating from './StarRating';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

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
        // console.log(restaurant)
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

    const useStyles = makeStyles((theme) => ({
        root: {
          maxWidth: 345
        },
        media: {
          height: 0,
          paddingTop: "56.25%" // 16:9
        },
        expand: {
          transform: "rotate(0deg)",
          marginLeft: "auto",
          transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest
          })
        },
        expandOpen: {
          transform: "rotate(180deg)"
        },
        avatar: {
          backgroundColor: red[500]
        }
      }));
        const classes = useStyles();
        const [expanded, setExpanded] = React.useState(false);

        const handleExpandClick = () => {
            setExpanded(!expanded);
    };

    return (
        <div className="list-group">
                    {restaurants && restaurants.map((restaurant) => {
                        return(
                            <>
                                <Card className={classes.root} >
                                    <CardHeader
                                        action={
                                            <IconButton aria-label="settings">
                                                <MoreVertIcon />
                                            </IconButton>
                                        } 
                                        title={restaurant.name}
                                        />
                                            <CardMedia
                                            className={classes.media}
                                            image="https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80jpg"
                                            title="Paella dish"
                                            />
                                                <CardContent>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                    <span>{renderRating(restaurant)}</span>
                                                    </Typography>
                                                </CardContent>
                                    <Button 
                                        variant="contained"
                                        color="secondary"  
                                        onClick={() => handleRestaurantSelect(restaurant.id)} 
                                        key={restaurant.id}>
                                    Add a Review
                                    </Button>
                                    <Button 
                                        variant="contained"
                                        color="primary"
                                        onClick={(event) => handleDelete(event, restaurant.id)} >
                                    View Reviews</Button>
                                </Card>
                            </>
                        )
                    })}
            
        </div>
    )
}

export default RestaurantList
