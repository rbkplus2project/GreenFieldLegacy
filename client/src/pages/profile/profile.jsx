import './profile.css';
import React from "react"

import NavAndSearch from "../../components/navBar/navBar"

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     
    }
  }
  render() {
   const { currentUser,checkIn,checkOut,searchValue,cityAndCountry,handleSeachButtonClick} =this.props
    return (
      <div>
        <NavAndSearch handleSeachButtonClick={handleSeachButtonClick}currentUser={currentUser} checkIn={checkIn} checkOut={checkOut} searchValue={searchValue} cityAndCountry={cityAndCountry}/>
      </div>
    );
  }
}
export default Profile;
