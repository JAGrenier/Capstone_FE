import React, { useState } from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root:{
        height: '100vh',
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '50%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const AddReview = () => {
    const {id} = useParams()
    const history = useHistory()
    const location = useLocation()
    const [name, setName] = useState("") 
    const [reviewText, setReviewText] = useState("")
    const [disability, setDisability] = useState("")
    const [image, setImage] = useState("")
    const [rating, setRating] = useState("Rating")
    const classes = useStyles();

    

    const handleSubmitReview = async (event) => {    
        event.preventDefault()
        console.log(name)
        try{
            await RestaurantFinder.post(`/${id}/addReview`, {
                restaurant_id: id,
                name,
                disability,
                rating,
                review: reviewText,
                image
        });
        history.push("/")
        history.push(location.pathname)
        } catch(err){
            console.log(err)
        }
    }

    return (
        <Grid  component="main" >
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5" >
                    Add New Review
                </Typography>
                <form className={classes.form} noValidate>
                <Grid container spacing={1} >
                    <Grid item xs={12} >
                        <TextField 
                        autoComplete="fname"
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
                        <FormControl variant="outlined" style={{minWidth: 551}}className={classes.formControl}>
                        <InputLabel id="rating">Rating</InputLabel>
                            <Select
                                labelId="rating"
                                id="rating"
                                value={rating}
                                onChange={(event) => setRating(event.target.value)}
                                label="Rating"
                                required
                                >
                                <MenuItem value={1}>1 Stars</MenuItem>
                                <MenuItem value={2}>2 Stars</MenuItem>
                                <MenuItem value={3}>3 Stars</MenuItem>
                                <MenuItem value={4}>4 Stars</MenuItem>
                                <MenuItem value={5}>5 Stars</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl variant="outlined" style={{minWidth: 551}} className={classes.formControl}>
                        <InputLabel id="disability">Disability</InputLabel>
                            <Select
                                labelId="disability"
                                id="disability"
                                value={disability}
                                onChange={(event) => setDisability(event.target.value)}
                                label="Disability"
                                required
    
                                >
                                <MenuItem value={1}>Physical</MenuItem>
                                <MenuItem value={2}>Cognitive </MenuItem>
                                <MenuItem value={3}>Hearing</MenuItem>
                                <MenuItem value={4}>Vision</MenuItem>
                                <MenuItem value={5}>Other/Prefer not to include</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                            <TextField
                            name = "review"
                            id = "review"
                            label = "Review"
                            multiline
                            rows = {6}
                            value = {reviewText}
                            onChange = {(event) => setReviewText(event.target.value)}
                            fullWidth
                            required
                            variant = "outlined"
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
                        onClick={handleSubmitReview} 
                        color="primary"
                        fullWidth
                        variant="contained"
                        >Submit Review
                    </Button> 
                </Grid>
            </form>
        </div>
    </Grid>
    )
}

export default AddReview
