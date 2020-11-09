import React from 'react'
import StarRating from './StarRating'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid'
import { Switch } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 1000,
      
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    title: {
      fontWeight: 500,
    },
  }));

const Reviews = ({reviews}) => {
    
    const classes = useStyles();

    const disabilityType = (disability) =>{
      switch(disability){
        case 1:
        return " Physical"
        case 2:
        return " Cognitive"
        case 3:
        return " Hearing"
        case 4:
        return " Vision"
        case 5:
        return " Other/Prefer not to Answer"
        default: 
        return " Not Listed"
      }
    }
    
    return (
        <div className={classes.root}>
            <Grid 
        container 
        spacing={2}
        direction="row"
        justify="center"
        alignItems
        >
            {reviews.map((review) => {
                return ( 
                <>
                    <Grid 
                        item 
                        xs={12}
                        sm={6}
                        md={3}
                        key={review.id}
                        >
                        <Card>
                            <CardHeader
                                title={review.name}
                                className={classes.title}
                                disableTypography
                                />
                                    <CardMedia
                                    className={classes.media}
                                    image={review.image}
                                    />
                        
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <span><StarRating rating={review.rating} /></span>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <span>{review.review}</span>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <span><strong>
                                      Disability Reviewer:  
                                      {disabilityType(review.disability)}
                                      </strong>
                                      </span>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </>
                ) 
            })}
            </Grid>
        </div>
    )
}

export default Reviews
