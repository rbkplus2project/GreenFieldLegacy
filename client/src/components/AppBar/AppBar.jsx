import React from "react"
import 'date-fns';
import { Toolbar, AppBar, IconButton, Typography, Button } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import "./appBar.css"
import {Link } from 'react-router-dom';
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
            .then(() => {
                localStorage.removeItem("jwt-auth")
                
                window.location.reload()
            })
    }
    render() {
        return (
            <div>
                <div className="NavBar">
                    <AppBar position="static">
                        <Toolbar className="toolBar">
                            <Link  to='/'>
                            <Typography className="typography mys" variant="h4">
                                HotelCom
                            </Typography>
                            </Link>
                            {
                                this.props.currentUser ?
                                    <div >
                                        <Button color="inherit" onClick={this.handleLoginClick}>
                                            Log-out
                                    </Button>
                                        <Link  to='/profile' className="mys">
                                        <IconButton color='inherit' edge="start" aria-label="menu" >
                                        <AccountCircleIcon className="Account" />
                                           
                                        </IconButton>
                                        </Link>
                                    </div>

                                    :
                                    <div >
                                        <Button >
                                        <Link  to='/signin' className="mys">
                                            Sign-in
                                         </Link>
                                         </Button>
                                         <Button color="inherit">
                                         <Link  to='/signin' className="mys">
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