import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './card.css';
import img from "./singapore.png";
import RateReviewIcon from '@material-ui/icons/RateReview';
import Rating from '@material-ui/lab/Rating';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root} id="body">
    <div className="first_img">
    <div  >
      < img src={img} className="img img_abs"/>
      {/* <FavoriteBorderIcon className="fav_rel" /> */}
      </div>
    </div>
    <div className ="center">
      <div className={classes.details}>
        <CardContent className={classes.content}>
        <div>
          <Typography component="h5" variant="h5">
          Seneca Lake (and vicinity)
          </Typography>
          </div>
          <div className="center-second">
          <Typography variant="subtitle1" color="textSecondary">
          <div className="citysize">
          New York, United States of America
          </div>
          </Typography>
          </div>
        </CardContent>
        <div className="dollers">
        <Typography  >
        <div className="facility">
        swimming pool,Airport shuttle,Tea/Coffee maker
        </div>
          </Typography>
           $ 19.99
          
          </div>
        </div>
        </div>
        <div className='third_component'>
        <div className="thirdcom_firstone">
        <Typography component="h6" variant="h6">
          very good
          </Typography>
          </div>
          <div className="third_component_secondline">
          <Rating />
          </div>
          <div className="third_component_thirdline">
          <Typography component="h6" variant="h6">
           total reviews
          </Typography>
          <div style={{padding:"6px"}}>
          <RateReviewIcon className='ratereview'/>
          </div>
          </div>
        </div>
        

       
        {/* <div className={classes.controls}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </div> */}
      
     
    </Card>
  );
}