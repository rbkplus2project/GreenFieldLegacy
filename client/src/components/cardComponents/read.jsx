import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './card.css';
// import img from "./singapore.png";
import RateReviewIcon from '@material-ui/icons/RateReview';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
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

export default function MediaControlCard({ removeGetRes,compDidmount, reserveShow, favoriteNotEmp, adults, dateDifferenceNumber, data, currentUser, hideRes, hideFav }) {
  const classes = useStyles();
  // const theme = useTheme();

  const [favNotEmpty, setFav] = React.useState(favoriteNotEmp || false);
  const [reservation, setReservation] = React.useState((removeGetRes || reserveShow || false));


  const handleFavAdd = (data, currentUser) => {
    console.log("add is clicked")
    fetch('/fav/add', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "displayName": currentUser, "favorites": data }),
    })
      .then(response => response.json())
      .then((data) => {
        compDidmount()
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    setFav(true)
  }
  const handleFavRemove = (data, currentUser) => {
    // console.log(data)
    fetch('/fav/delete', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "displayName": currentUser, "favorites": data }),
    })
      .then(response => response.json())
      .then(data => {
        compDidmount()
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    if (!hideRes)
      setFav(false)
  }

  const handleReserveAdd = (data, currentUser) => {
    fetch('/reservation/add', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "displayName": currentUser, "reservations": data }),
    })
      .then(response => response.json())
      .then(data => {
        compDidmount()
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    setReservation(true)
  }

  const handleReserveRemove = (data, currentUser) => {
    fetch('/reservation/delete', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "displayName": currentUser, "reservations": data }),
    })
      .then(response => response.json())
      .then(data => {
        compDidmount()
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    if (!hideFav)
      setReservation(false)
  }

  const priceConverter = (price, adults, date) => {
    let res = price.split("$")
    let x = Number(res[1])
    return x * adults * date
  }
  return (
    <Card className={classes.root} id="body" style={{borderRadius:"15px"}}>
      <div className="first_img">
        <div  >
          < img src={data.thumbnailUrl} className="img img_abs" alt="" style={{borderRadius:"15px"}}/>
          {/* < img src={img} className="img img_abs" alt="" /> */}

          {hideFav ?
            <div></div>
            :
            currentUser ?
              !(favNotEmpty || favoriteNotEmp) ?
                <FavoriteBorderIcon color="action" fontSize="large" className="icon" onClick={() => handleFavAdd(data, currentUser)} />
                :
                <FavoriteIcon color="error" fontSize="large" className="icon" onClick={() => handleFavRemove(data, currentUser)} />
              :
              <div></div>
          }



        </div>
      </div>
      <div className="center">
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <div>
              <Typography component="h5" variant="h5">
                {/* Seneca Lake (and vicinity) */}
                {data.name}
              </Typography>
            </div>
            <div className="center-second">
              <Typography component="div" variant="subtitle1" color="textSecondary">
                <div className="citysize">
                  {/* New York, United States of America */}
                  {data.address.locality}, {data.address.countryName}
                </div>
              </Typography>
            </div>
          </CardContent>
          <div className="dollers">
            <Typography  component="div">
              <div className="facility">
                {/* swimming pool,Airport shuttle,Tea/Coffee maker */}
                {data.address.streetAddress}
              </div>
            </Typography>
            {/* $ 19.99 */}
            ${priceConverter(data.ratePlan.price.current, adults, dateDifferenceNumber())}
            {/* {data.ratePlan.price.current} */}
          </div>
        </div>
      </div>
      <div className='third_component'>
        <div className="thirdcom_firstone">
          {/* <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly /> */}
          <Rating name="half-rating-read" defaultValue={data.starRating ? data.starRating : 0} precision={0.5} readOnly />

        </div>
        <div className="third_component_thirdline">
          <Typography component="div">
            {
              data.guestReviews ?
                <div>
                  guest reviews : {data.guestReviews.unformattedRating}
                </div>

                :
                <div>
                  no guest reviews
            </div>
            }



          </Typography >
          <div style={{ padding: "6px" }}>
            <RateReviewIcon className='ratereview' />
          </div>
        </div>
        <div className="third_component_secondline">
          {
            currentUser ?
              reservation ?
                <Button variant="contained" color="primary" onClick={() => handleReserveRemove(data, currentUser)}>
                  remove reservation
                </Button>
                :
                <Button variant="contained" color="primary" onClick={() => handleReserveAdd(data, currentUser)}>
                  reserve here
                </Button>
                :
                <div></div>
          }

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