import 'date-fns';
import React from "react"
import { Button } from '@material-ui/core';
import MaterialUIPickers from "../date/date";
import GoogleMaps from "../inputSearch/inputSearch";
import {Link} from "react-router-dom";

import AppBarr from '../AppBar/AppBar';
import Greeting from '../greeting/greeting';
import "./navBar.css"

class NavAndSearch extends React.Component {
  constructor(props) { 
    super(props)
    this.state = {    
 
    }
  }
  render() {
    const { checkIn,checkOut,searchValue,cityAndCountry,handleSeachButtonClick,currentUser} =this.props
    return (
      <div className="two-comp">
        <AppBarr currentUser={currentUser}/>
        <div className="Greeting" >
          <Greeting />
          <form className="form" noValidate autoComplete="off">
            <GoogleMaps searchValue={searchValue} cityAndCountry={cityAndCountry}/>
            <MaterialUIPickers name="check in" checkInOrOut={checkIn} />
            <MaterialUIPickers name="check out" checkInOrOut={checkOut}/>
            <div className="search">
              <Button  variant="contained" size="medium"  onClick={(e)=>{e.preventDefault();handleSeachButtonClick()}}>
              <Link  to='/cardlist' >
              search
              </Link>
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
