import 'date-fns';
import React from "react"
import { Button } from '@material-ui/core';
import MaterialUIPickers from "../date/date";
import InputSearch from "../inputSearch/inputSearch";
import { Link } from "react-router-dom";
// import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
// import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
// import { InputLabel } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import AppBarr from '../AppBar/AppBar';
import Greeting from '../greeting/greeting';
import "./navBar.css"

class NavAndSearch extends React.Component {
  render() {
    const { handleAdultsChange,checkIn, checkOut, searchValue, cityAndCountry, handleSeachButtonClick, currentUser } = this.props
    return (
      <div className="two-comp">
        <AppBarr currentUser={currentUser} />
        <div className="Greeting" >
          <Greeting />
          <form className="form" noValidate autoComplete="off">
            <InputSearch searchValue={searchValue} cityAndCountry={cityAndCountry} />
            <MaterialUIPickers name="check in" checkInOrOut={checkIn} />
            <MaterialUIPickers name="check out" checkInOrOut={checkOut} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "7px" }}>
              {/* <RemoveCircleOutlineIcon/>
            <InputLabel/>
            <AddCircleOutlineIcon/> */}
              <TextField
                id="standard-number"
                label="No. People"
                InputProps={{ inputProps: { min: 1 } }}
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e)=>handleAdultsChange(e.target.value) }
              />
           
            </div>
            <div className="search">
              {/* <Button  variant="outlined" color="primary" size="medium"  onClick={(e)=>{e.preventDefault();handleSeachButtonClick()}}>
              <Link  to='/cardlist' >
              search
              </Link>
          </Button> */}
              <Button variant="outlined" size="medium" color="primary" style={{ height: 30 }} onClick={(e) => { e.preventDefault(); handleSeachButtonClick() }}>
                <Link to='/cardlist' >
                  <p style={{ color: "Navy" }}>search</p>
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
