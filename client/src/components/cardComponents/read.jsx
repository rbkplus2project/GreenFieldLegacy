import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { Button } from '@material-ui/core';

var rate = 7.7
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 700,
            maxHeight: 340,
        },
        media: {
            width: '40%',
            height: '30%',
            paddingTop: '20.25%', // 16:9
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
    }),
);

export default function RecipeReviewCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader

                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Best Days Hotel"  //hotel name
                subheader="Dortmond, Germany"//hotel city-country
            />

            <div style={{ width: '100%' }}>
                <Box display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper">

                    <CardMedia
                        className={classes.media}
                        image="https://i.pinimg.com/originals/d1/1a/49/d11a493133d0d9087ab0b588491ee4f6.jpg"
                        title="Paella dish"
                    />
                    <CardContent><IconButton aria-label="add to favorites">
                        <label>45</label>  <AttachMoneyIcon />
                    </IconButton>


                        <Button variant="contained" color="secondary" style={{ height: '30px', width: '150px' }}>
                            Book Now
                    </Button>

                        <Button variant="contained" style={{ height: '30px', width: '150px', backgroundColor: '#03a9f4', color: 'white' }}>
                            Show on map
                    </Button>
                    </CardContent>
                </Box>

            </div>
            <CardContent>
                <IconButton aria-label="add to favorites">
                    <FavoriteBorderIcon />
                </IconButton>
                <IconButton>
                    <Rating name="half-rating-read" defaultValue={rate / 2} precision={0.5} readOnly />
                </IconButton>
                <Typography variant="body2" color="textSecondary" component="p">
                    Here we will put all the facilites, Gym, pool, events
        </Typography>
            </CardContent>


        </Card>
    );
}