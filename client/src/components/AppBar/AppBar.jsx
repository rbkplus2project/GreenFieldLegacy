import React from "react"
import 'date-fns';
import { Toolbar, AppBar, IconButton, Typography, Button } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import MenuIcon from '@material-ui/icons/Menu';
import "./appBar.css"
import { Link } from 'react-router-dom';
import "./appBar.css"
import logo from './great2.png'

class AppBarr extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }
    handleLoginClick = (e) => {
        e.preventDefault()
        fetch("/signout")
            .then(() => {
                localStorage.removeItem("jwt-auth")
                localStorage.removeItem("current-user")
                window.location.reload()
            })
    }
    render() {
        return (
            <div>
                <div className="NavBar">
                    <AppBar position="static">
                        <Toolbar className="toolBar">
                            <Link to='/'>
                                <Typography className="typography mys center" variant="h4">
                                    {/* <img alt='hotelImg' src={hotel} style={{ height: 35, width: 35, marginTop: 20 }} /> */}
                                    <img alt='HotelCom' src={logo} />
                                </Typography>
                            </Link>
                            {
                                this.props.currentUser ?
                                    <div >
                                        <Button color="inherit" onClick={this.handleLoginClick}>
                                            Log-out
                                    </Button>
                                        <Link to='/profile' className="mys">
                                            <IconButton color='inherit' edge="start" aria-label="menu" size="medium" m={2}>
                                                <AccountCircleIcon className="Account" />
                                            </IconButton>
                                        </Link>
                                    </div>

                                    :
                                    <div >
                                        <Button >
                                            <Link to='/signin' className="mys">
                                                Sign-in
                                         </Link>
                                        </Button>
                                        <Button color="inherit">
                                            <Link to='/signin' className="mys">
                                                Sign-up
                                         </Link>
                                        </Button>
                                    </div>
                            }


                        </Toolbar>
                    </AppBar>
                </div>

            </div>
        )

    }
}
export default AppBarr;