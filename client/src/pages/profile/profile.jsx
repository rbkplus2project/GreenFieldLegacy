import './profile.css';
import React from "react"

import AppBarr from "../../components/AppBar/AppBar"
import ProfileBody from "../../components/profileBody/profileBody"
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
        <ProfileBody/>
      </div>
    );
  }
}
export default Profile;
