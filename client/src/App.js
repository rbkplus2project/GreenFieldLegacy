import './App.css';
import React from "react"
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';


import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
import HomePage from "./pages/homePage/homePage"


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      initailItems: [{ city: "singapore", size: 'large' }, { city: "kualalumpur", size: 'large' }, { city: "losAngeles" }, { city: "rome" }, { city: "Barcelona" }, { city: 'paris' }],
     currentUser:"",
    }
  }

  componentDidMount() {
    //checking the auth
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'jwt-auth': localStorage.getItem('jwt-auth') // signed by Mo'men
      },
    }
    fetch("http://localhost:5000/auth",requestOptions)
      .then(res => res.json())
      .then(data => {
        this.setState({currentUser:data.displayName})
      })
      .then(()=>console.log(this.state))
      .catch(err => console.log(err.message))

    // this.state.initailItems.map(item => {
    //   fetch(`https://hotels4.p.rapidapi.com/locations/search?locale=en_US&query=${item.city}`, {
    //     "method": "GET",
    //     "headers": {
    //       "x-rapidapi-key": "19fe5ca383msh9591c981cf8ec3ap1768e4jsn0d1c67890d8e",
    //       "x-rapidapi-host": "hotels4.p.rapidapi.com"
    //     }
    //   })
    //     .then(response => {
    //       return response.json()
    //     })
    //     .then((data) => {
    //       fetch(`https://hotels4.p.rapidapi.com/properties/list?destinationId=${data.suggestions[0].entities[0].destinationId}&pageNumber=1&checkIn=2020-01-08&checkOut=2020-01-15&pageSize=25&adults1=1&currency=USD&locale=en_US&sortOrder=PRICE`, {
    //         "method": "GET",
    //         "headers": {
    //           "x-rapidapi-key": "19fe5ca383msh9591c981cf8ec3ap1768e4jsn0d1c67890d8e",
    //           "x-rapidapi-host": "hotels4.p.rapidapi.com"
    //         }
    //       })
    //         .then(response => {
    //          return response.json()
    //         })
    //         .then(data=>{
    //           console.log(data.data.body.searchResults.results[0].address.countryCode)
    //           let x=data.data.body.searchResults.results[0].address.countryCode
    //   this.setState({[x]:data.data.body.searchResults.results})
    //   console.log(data.data.body.searchResults.results)
    //   })
    //   .then(data=>console.log(this.state))
    //         .catch(err => {
    //           console.error(err);
    //         });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    // })

  }
  render() { 
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/signin" render={()=>
              this.state.currentUser
             ? (<Redirect to='/'/>)
             : (<SignInAndSignUpPage/>)} />
              {/* {this.state.navBarHidden?<div></div>: <NavBar/> } */}
          <Switch>
            <Route exact path="/" render={()=><HomePage currentUser={this.state.currentUser}/>} />
            {/* <Route exact path="/searchresults" component={SearchPage}  /> */}
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
