import React, { useState } from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
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
        <Container component="main" maxWidth='xs'>
            <CssBaseline />
            <div className={classes.paper}>
                <h2>Add a new Review</h2>
            <form className={classes.form} noValidate>
                <Grid container space={2} >
                    <Grid item xs={12}>
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
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="rating">Rating</InputLabel>
                            <Select
                                labelId="rating"
                                id="rating"
                                value={rating}
                                onChange={(event) => setRating(event.target.value)}
                                label="Rating"
                                fullWidth
                                >
                                <MenuItem value="">
                                <em>None</em>
                                </MenuItem>
                                <MenuItem value={1}>1 Stars</MenuItem>
                                <MenuItem value={2}>2 Stars</MenuItem>
                                <MenuItem value={3}>3 Stars</MenuItem>
                                <MenuItem value={4}>4 Stars</MenuItem>
                                <MenuItem value={5}>5 Stars</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item sm={12}>
                        <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="disability">Disability</InputLabel>
                            <Select
                                labelId="disability"
                                id="disability"
                                value={disability}
                                onChange={(event) => setDisability(event.target.value)}
                                label="Disability"
                                fullWidth
                                >
                                <MenuItem value="">
                                <em>None</em>
                                </MenuItem>
                                <MenuItem value={1}>Physical</MenuItem>
                                <MenuItem value={2}>Cognitive </MenuItem>
                                <MenuItem value={3}>Hearing</MenuItem>
                                <MenuItem value={4}>Vision</MenuItem>
                                <MenuItem value={5}>Other/Prefer not to include</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item sm={12}>
                            <TextField
                            id = "review"
                            label = "Review"
                            multiline
                            rows = {8}
                            value = {reviewText}
                            onChange = {(event) => setReviewText(event.target.value)}
                            defaultValue = "Type Your Review Here"
                            fullWidth
                            variant = "outlined"
                            />
                    </Grid>
                    <Grid item sm={12}>
                        <TextField 
                        name="image"
                        variant="outlined"
                        value={image}
                        onChange={(event) => setImage(event.target.value)}
                        required
                        fullWidth
                        id="image"
                        label="Image URL"
                        autoFocus
                      />
                    </Grid>
                {/* 
                
            <div className="form-group col-8">
                    <label htmlFor="image">image</label>
                    <input 
                    value={image}
                    onChange={ event => setImage(event.target.value)}
                    type="text" 
                    id="image"
                    placeholder="image"
                    className="form-control" 
                    />
                </div>
            <div className="form-group">
                <label htmlFor="review">Review</label>
                <textarea 
                value={reviewText} 
                onChange = {(event) => setReviewText(event.target.value)}
                id="Review" 
                className="form-control"
                ></textarea>
            </div>
            */}
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
    </Container>
    )
}

export default AddReview
