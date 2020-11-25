
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import ResetPassword from "./pages/ResetPassword/ResetPassword.jsx";
import NewPassword from "./pages/NewPassword/NewPassword.jsx";
import CardList from "./components/CardList/cardList";
import Profile from "./pages/profile/profile.jsx";
import HomePage from "./pages/homePage/homePage";
import UserSign from "./pages/UserSign/UserSign";
import Footer from "./components/Footer/Footer.jsx";
import React from "react";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: localStorage.getItem("current-user"),
      checkIn: "2020-11-24",
      checkOut: "2020-11-30",
      searchValue: "",
      adults: 1,
      resulsArray: [],
      admin: false,
      cityAndCountry: ""
    }
  }

  //converting the date into numbers
  dateDifferenceNumber = () => {
    let x = this.state.checkIn.split("-")
    let y = this.state.checkOut.split("-")
    return (y[0] - x[0]) * 365 + (y[1] - x[1]) * 30 + (y[2] - x[2])
  }

  handleCheckInChange = (checkIn) => {
    this.setState({ checkIn })
  }

  handleCheckOutChange = async (checkOut) => {
    await this.setState({ checkOut })
    let x = this.state.checkIn.split("-")
    let y = this.state.checkOut.split("-")
    if ((y[0] - x[0]) * 365 + (y[1] - x[1]) * 30 + (y[2] - x[2]) < 0)
      alert("check-in date should be before check-out")
  }

  handlesearchValueChange = (searchValue) => {
    this.setState({ searchValue })
  }

  handleAdultsChange = (data) => {
    let data1 = Number(data)
    this.setState({ adults: data1 })
  }

  handleCityAndCountry = (cityAndCountry) => {
    this.setState({ cityAndCountry })
  }

  getCityCenter = () => {
    return this.state.cityCenter
  }

  refresh = () => {
    this.setState({})
  }

  handleSeachButtonClick = () => {
    if(this.state.searchValue){
      fetch(`https://hotels4.p.rapidapi.com/locations/search?locale=en_US&query=${this.state.searchValue}`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": "7747b0acebmshe8957ecdd090630p1d3bf9jsn448eb0340be7",
          "x-rapidapi-host": "hotels4.p.rapidapi.com",
        }
      })
        .then(response => {
          return response.json()
        })
        .then((data) => {
          if(data){
          if(data.suggestions[0].entities[0]){
          this.setState({ cityCenter: data.suggestions[0].entities[0] })
          fetch(`https://hotels4.p.rapidapi.com/properties/list?destinationId=${data.suggestions[0].entities[0].destinationId}&pageNumber=1&checkIn=${this.state.checkIn}&checkOut=${this.state.checkOut}&pageSize=25&adults1=1&currency=USD&locale=en_US&sortOrder=PRICE`, {
            "method": "GET",
            "headers": {
              "x-rapidapi-key": "7747b0acebmshe8957ecdd090630p1d3bf9jsn448eb0340be7",
	            "x-rapidapi-host": "hotels4.p.rapidapi.com"
            }
          })
            .then(response => {
              return response.json()
            })
            .then(data => {
              this.setState({ resulsArray: data.data.body.searchResults.results })
            })
            .then(data => {})
            .catch(err => {
              console.error(err);
            });
        }else{this.setState({ resulsArray: [{address: {streetAddress: "middle of nowhere", locality: "Nowhere"},
        coordinate: {lat: 0, lon: 0},
        name: "No Hotel",
        guestReviews: {unformattedRating: 0, total: 1},
        ratePlan: {price: {current: "$0"}},
        starRating: 0,
        thumbnailUrl: "https://i.insider.com/562fbe249dd7cc1b008c528d?width=700"
        }]})}}})
        .catch(err => {
          console.error(err);
        });}
  }

  componentDidMount() {
    //checking the auth
    if(this.state.currentUser){const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'jwt-auth': localStorage.getItem('jwt-auth')
      }
    }
    fetch("http://localhost:5000/user/auth", requestOptions)
      .then(res => res.json())
      .then(data => {
        if (data.displayName) localStorage.setItem("current-user", data.displayName)
        this.setState({
          admin: data.admin
        })
      })}
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/signin" render={() =>
            this.state.currentUser
              ? (<Redirect to='/' />)
              : (<UserSign />)} />
          <Route exact path="/signup" render={() =>
            this.state.currentUser
              ? (<Redirect to='/' />)
              : (<UserSign />)} />
          <Route exact path="/profile" render={() =>
            this.state.currentUser
              ? (<Profile adults={this.state.adults} dateDifferenceNumber={this.dateDifferenceNumber} handleSeachButtonClick={this.handleSeachButtonClick} currentUser={this.state.currentUser} cityAndCountry={this.handleCityAndCountry} checkIn={this.handleCheckInChange} checkOut={this.handleCheckOutChange} searchValue={this.handlesearchValueChange} />)
              : (<Redirect to='/' />)} />
          <Switch>
            <Route exact path="/" render={() => <HomePage handleAdultsChange={this.handleAdultsChange} handleSeachButtonClick={this.handleSeachButtonClick} currentUser={this.state.currentUser} cityAndCountry={this.handleCityAndCountry} checkIn={this.handleCheckInChange} checkOut={this.handleCheckOutChange} searchValue={this.handlesearchValueChange} />} />

            <Route exact path="/cardlist" render={() => <CardList refresh={this.refresh} cityCenter={this.getCityCenter} handleAdultsChange={this.handleAdultsChange} adults={this.state.adults} dateDifferenceNumber={this.dateDifferenceNumber} reservationArray={this.handleReservationArray} favoritesArray={this.handleFavoritesArray} handleSeachButtonClick={this.handleSeachButtonClick} currentUser={this.state.currentUser} cityAndCountry={this.handleCityAndCountry} checkIn={this.handleCheckInChange} checkOut={this.handleCheckOutChange} searchValue={this.handlesearchValueChange} resulsArray={this.state.resulsArray} />} />
            <Route path="/forgot-password" component={ResetPassword} />

            <Route path="/reset/:token" component={NewPassword} />

    
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

//sign-up  sign-in
//username/password
//hash passowrd
//save to db
//retrieve the obj from db
// generate token from id
//send token in the header 
//save the token in local storage

//log out
//res.header==>""
//local storgare .removre item ("jwt-auth")  

//logout sign-in sing-out ==>ready

//now you need to verify the token!!!
//send the token in the header as a get req from the front-end==> i need a middle-ware
//middle ware function
//take the token from the header==>req.header==>now i have the token
//verify the token==>jwt.verify==>gives me the id of the user(id)
//User.findOne({_id:id})==>gives me a user
//send the user as a response to the front-end from the server 
