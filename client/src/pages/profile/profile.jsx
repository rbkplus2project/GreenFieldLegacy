import './profile.css';
import React from "react"

import AppBarr from "../../components/AppBar/AppBar"

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
        <AppBarr currentUser={currentUser}/>
      </div>
    );
  }
}
export default Profile;
