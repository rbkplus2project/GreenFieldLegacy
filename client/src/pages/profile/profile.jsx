import React from "react"
import AppBarr from "../../components/AppBar/AppBar"
import ProfileBody from "../../components/profileBody/profileBody"

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  // Changes profile picture & saves in database
  

  render() {
    const { currentUser,
      // checkIn,
      // checkOut,
      // searchValue,
      // cityAndCountry,
      // handleSeachButtonClick ,
      adults, dateDifferenceNumber } = this.props
    return (
      <div>
        <div>
          <AppBarr currentUser={currentUser} />
          <ProfileBody adults={adults} currentUser={currentUser} dateDifferenceNumber={dateDifferenceNumber} />
          {/* <button className='edit-profile' >Edit Profile</button> */}
        </div>
        {/* <div className>
          <br />
          <br />
          <span>Name</span>  <input type="text" className="text" id="change-name" name="change-name" />  <button className="edit" onClick={this.updateName} >Change Name</button>
          <br />
          <span>Email</span>  <input type="email" className="text" id="change-email" name="change-email" />  <button className="edit" onClick={this.updatePass}>Change Password</button>
        </div> */}
      </div>
    );
  }
}


export default Profile;
