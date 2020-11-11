import React, { useContext, useState } from 'react'
import RestaurantFinder from "../apis/RestaurantFinder"
import { RestaurantsContext } from '../Context/RestaurantsContext'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root:{
        height: '10vh',
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '10ch',
        },
    },
    paper: {
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const AddRestaurant = ({position}) => {
    const {addRestaurants} = useContext(RestaurantsContext);
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const classes = useStyles();

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
        } catch (err){

        }
    }
    return (
        <Grid  component="main" >
        <CssBaseline />
        <div className={classes.paper}>
            <Typography component="p"  >
                This location has no reviews, would you like to add one?
            </Typography>
            <Typography component="p"  >
                Add New Location
            </Typography>
            <form className={classes.form} noValidate>
            <Grid container spacing={1} >
                <Grid item xs={12} >
                    <TextField 
                    name="name"
                    variant="outlined"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                    fullWidth
                    id="name"
                    label="Name"
                />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                    name="image"
                    variant="outlined"
                    value={image}
                    onChange={(event) => setImage(event.target.value)}
                    required
                    fullWidth
                    id="image"
                    label="Image URL"
                    />
                </Grid>
                <Button 
                    type="submit" 
                    onClick={handleSubmit} 
                    color="primary"
                    fullWidth
                    variant="contained"
                    >Create New Location
                </Button> 
            </Grid>
        </form>
    </div>
</Grid>
    )
}

export default AddRestaurant
