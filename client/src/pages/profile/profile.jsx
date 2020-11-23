import './profile.css';
import React from "react"
// import Button from "@material-ui/core/Button";
// import ButtonGroup from "@material-ui/core/ButtonGroup";
import Avatar from '@material-ui/core/Avatar';
import AppBarr from "../../components/AppBar/AppBar"
// import ProfileBody from "../../components/profileBody/profileBody"
class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    name: '',
    email: '',
    creditCard: ''
    }
  }
  // Gets the logged in user's info
  componentDidMount = () => {
    fetch("http://127.0.0.1:5000/user/getuser", {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "displayName": this.props.currentUser }),
    })
        .then(data => data.json())
        .then(data => this.setState({ currentUser: data.displayName, email: data.email, admin: data.admin, master: data.master }))
        // .then(() => this.setState({ price: this.handlePrice() }))
}
  render() {
    return (
      <div >
        <div className="navbar">
          <AppBarr  />
        </div>
          <form >
            {/* <h2>
            <Avatar alt="ameedasmah" src="https://ca.slack-edge.com/TTVPM20S0-U018HTXLNDD-6ec65bc18cc7-512" />
            </h2> */}
            <label htmlFor="username">Email : ameed asmah</label>

            <label htmlFor="email">Email : ameed.asmah1@gmail.com</label>
            
            <label htmlFor="creditcard">cardnumber : "1234-1234-1234-1234"</label>

            <label htmlFor="favourit number">favorite number : "4" </label>

            <label htmlFor="res number">res number : 2</label>


            {/* <input type="text" name="cardnumber" placeholder="1234-1234-1234-1234" required /> */}
            {/* <div className="email error">some error</div> */}
            {/* <label for="password">Password</label>
            <input type="password" name="password" required />
            <div className="password error"></div> */}
            <div className="buttondiv">
            <button>Favorite</button> 
            <button>Reserve</button>
            </div>
          </form>
     {/* const { currentUser,checkIn,checkOut,searchValue,cityAndCountry,handleSeachButtonClick ,adults,dateDifferenceNumber} =this.props
    return (
      <div>
        <AppBarr currentUser={currentUser}/>
        <ProfileBody adults={adults} currentUser={currentUser} dateDifferenceNumber={dateDifferenceNumber} /> 
        </div> */}
      </div>

    );  
  }
}
export default Profile;
