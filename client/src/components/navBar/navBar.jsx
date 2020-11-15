import 'date-fns';
import React from "react"
import { Button } from '@material-ui/core';
import MaterialUIPickers from "../date/date";
import GoogleMaps from "../inputSearch/inputSearch";

import AppBarr from '../AppBar/AppBar';
import Greeting from '../greeting/greeting';
import "./navBar.css"

class NavAndSearch extends React.Component {
  constructor() { 
    super()
    this.state = {    
 
    }
  }
  render() {
    return (
      <div className="two-comp">
        <AppBarr />
        <div className="Greeting" >
          <Greeting />
          <form className="form" noValidate autoComplete="off">
            <GoogleMaps />
            <MaterialUIPickers name="check in" />
            <MaterialUIPickers name="check out" />
            <div className="search">
              <Button  variant="contained" size="medium" >
                search
          </Button>
            </div> 
          </form>
        </div>
        <div>
        </div>
      </div>
    );
  }
}

export default NavAndSearch;
