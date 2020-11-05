import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder'


const AddReview = () => {
    const {id} = useParams()
    const history = useHistory()
    const location = useLocation()
    const [name, setName] = useState("") 
    const [reviewText, setReviewText] = useState("")
    const [disability, setDisability] = useState("")
    const [image, setImage] = useState("")
    const [rating, setRating] = useState("Rating")
    


    const handleSubmitReview = async (event) => {    
        event.preventDefault()
        try{
            await RestaurantFinder.post(`/${id}/addReview`, {
                name,
                rating,
                disability,
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
      <div className="mb-2">
        <h2>Add a new Review</h2>
      <form action="">
          <div className="form-row">
              <div className="form-group col-8">
                  <label htmlFor="name">Name</label>
                  <input 
                  value={name}
                  onChange={ event => setName(event.target.value)}
                  type="text" 
                  id="name"
                  placeholder="name"
                  className="form-control" 
                  />
              </div>
              <div className="form-group col-4">
                  <label htmlFor="rating">Rating</label>
                  <select 
                  value={rating}
                  onChange={(event) => setRating(event.target.value)}
                  id="rating" 
                  className="custom-select"
                  >
                      <option disabled>Rating</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                  </select>
              </div>
              <div className="form-group col-4">
                  <label htmlFor="disability">Disability</label>
                  <select 
                  value={disability}
                  onChange={(event) => setDisability(event.target.value)}
                  id="disability" 
                  className="custom-select"
                  >
                      <option disabled>Disability</option>
                      <option value="1">Physical</option>
                      <option value="2">Cognitive</option>
                      <option value="3">Hearing</option>
                      <option value="4">Visual</option>
                      <option value="5">Other/prefer not to answer</option>
                  </select>
              </div>
          </div>
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
          <Button 
          type="submit" 
          onClick={handleSubmitReview} 
          color="primary"
          fullWidth
          variant="contained"
            >Submit</Button>
      </form>
      
  </div>
    )
}

export default AddReview
