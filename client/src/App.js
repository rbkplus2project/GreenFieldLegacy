import './App.css';
import React from "react"
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';


import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
import HomePage from "./pages/homePage/homePage"
import CardComp from "./components/cardComponents/card"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      initailItems: [{ city: "singapore", size: 'large' },{ city: "losAngeles" }, { city: "kualalumpur", size: 'large' },  { city: "rome" },  { city: 'paris' },{ city: "Barcelona" }],
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

  }
  render() { 
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/signin" render={()=>
              this.state.currentUser
             ? (<Redirect to='/'/>)
             : (<SignInAndSignUpPage/>)} />
          <Switch>
            <Route exact path="/" render={()=><HomePage currentUser={this.state.currentUser}/>} />
            <Route exact path="/card" render={()=><CardComp/>} />
          </Switch>
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

