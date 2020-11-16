import React from "react"
import 'date-fns';
import { Toolbar, AppBar, IconButton, Typography, Button } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import "./appBar.css"




class AppBarr extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }

    handleLoginClick = (e) => {
        e.preventDefault()
        fetch("http://127.0.0.1:5000/signout")
            .then(() => localStorage.removeItem("jwt-auth"))
    }
    render() {
        return (
            <div>
                <div className="NavBar">
                    <AppBar position="static">
                        <Toolbar className="toolBar">
                            <IconButton color='inherit' edge="start" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography className="typography" variant="h4">
                                HotelCom
                            </Typography>
                            <Button color="inherit" onClick={this.handleLoginClick}>
                                Sign-in
                            </Button>
                            <Button color="inherit" onClick={this.handleLoginClick}>
                                Log-out
                            </Button>
                            <Button color="inherit">
                                Sign-up
                            </Button>
                            <IconButton color='inherit' edge="start" aria-label="menu">
                                <AccountCircleIcon className="Account" />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                </div>

            </div>
        )

    }
}
export default AppBarr;