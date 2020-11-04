import { Button, Container, Grid, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder'

const useStyles = makeStyles((theme) => ({
    form: {
      width: '100%', 
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
        try{
            const response = await RestaurantFinder.post(`/${id}/addReview`, {
                name,
                review: reviewText,
                rating
        });
        history.push("/")
        history.push(location.pathname)
        } catch(err){
            console.log(err)
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="disability"
                label="Disability"
                name="disability"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="rating"
                label="Rating"
                name="rating"
                autoComplete="rating"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="review"
                label="Review"
                id="review"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit Review
          </Button>
          <Grid container justify="flex-end"> 
          </Grid>
        </form>
        </Container>
    )
}

export default AddReview
