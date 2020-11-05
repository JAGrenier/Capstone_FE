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

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 1000,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

const Reviews = ({reviews}) => {
    
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
